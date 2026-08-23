import React from 'react';
const LABEL_39196 = 'component_39196';
export function Component39196({ value = 39196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39196, 'data-value': derived.doubled }, children);
}
export default Component39196;
