import React from 'react';
const LABEL_18289 = 'component_18289';
export function Component18289({ value = 18289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18289, 'data-value': derived.doubled }, children);
}
export default Component18289;
