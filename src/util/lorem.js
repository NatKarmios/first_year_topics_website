import React from "react";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut vulputate elit. Curabitur et diam vel est auctor porta. Nulla sollicitudin egestas ipsum eget lacinia. Aenean eu nibh vestibulum, rutrum erat at, vulputate felis. Morbi pharetra pretium felis, at aliquet mi sodales non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vehicula condimentum massa a tempus. Quisque aliquet elementum dapibus. Ut orci justo, suscipit et metus vitae, varius elementum ipsum."
              + "\n\nPellentesque aliquet neque ac mauris ultricies, nec ultricies lorem iaculis. Etiam at convallis massa. Suspendisse orci ex, iaculis a nulla non, fringilla pulvinar velit. Suspendisse imperdiet a dui at rhoncus. Sed eu ligula sit amet lectus feugiat fringilla ac eu eros. Sed ac neque ac ipsum tincidunt eleifend et varius libero. Quisque at pharetra tortor, id ultricies sapien."
              + "\n\nUt eget sodales dui. Integer sodales imperdiet magna nec ornare. Donec sem ligula, tincidunt nec erat eget, dictum porta enim. Duis mattis, dolor eget ultricies tempor, enim tellus egestas ligula, id vehicula lorem ante varius lectus. Integer non aliquet urna. Nam venenatis iaculis risus nec venenatis. Fusce sodales ipsum leo, quis tempor purus sollicitudin nec. Vivamus luctus cursus ante. Aliquam volutpat non sapien et blandit."
              + "\n\nDonec vitae dignissim odio. Maecenas in commodo massa. Nullam elementum sit amet velit ut placerat. Curabitur mollis neque a tortor tempor, vel interdum mi venenatis. Cras consequat dui ut libero cursus pellentesque. Cras sed porttitor lorem. Sed quis lacus id erat pulvinar ornare id eu lorem. Donec ipsum nisi, gravida vel metus non, porttitor dignissim diam. Quisque sit amet interdum libero, sit amet fringilla neque. Mauris aliquam nisl id nulla ornare scelerisque. Donec semper, nulla vel dictum imperdiet, lacus metus porttitor libero, at tempor mi dui vel lorem. Suspendisse in odio eget lacus auctor euismod nec id justo. Proin pulvinar neque quis est semper ultrices."
              + "\n\nDonec et ornare nisi. Cras erat nulla, aliquam ac diam quis, accumsan sagittis urna. Suspendisse nisi nisi, elementum sit amet nulla eu, vehicula luctus lectus. Pellentesque et consectetur metus. Nullam interdum diam magna. Aenean sit amet eros vel mauris ornare pulvinar quis non leo. Ut porta erat orci, in maximus felis pulvinar a. Ut molestie diam lacus, ac ornare ante fermentum non. Duis eget augue dignissim, cursus orci id, ultricies quam. Vivamus dictum ante et magna suscipit, eu imperdiet nunc faucibus."
              + "\n\n";

export const lorem = (len) => {
  let total = "";
  while (total.length < len)
    total += LOREM;
  if (total.length > len)
    total = total.substring(0, len);
  return total;
};

export const Lorem = ({len=500}) => (
  <span>
    {lorem(len)}
  </span>
);

