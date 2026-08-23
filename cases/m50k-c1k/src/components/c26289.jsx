import React from 'react';
const LABEL_26289 = 'component_26289';
export function Component26289({ value = 26289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26289, 'data-value': derived.doubled }, children);
}
export default Component26289;
