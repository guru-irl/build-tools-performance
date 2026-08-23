import React from 'react';
const LABEL_6153 = 'component_6153';
export function Component6153({ value = 6153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6153, 'data-value': derived.doubled }, children);
}
export default Component6153;
