import React from 'react';
const LABEL_25195 = 'component_25195';
export function Component25195({ value = 25195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25195, 'data-value': derived.doubled }, children);
}
export default Component25195;
