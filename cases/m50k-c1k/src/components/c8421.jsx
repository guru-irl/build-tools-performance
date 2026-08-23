import React from 'react';
const LABEL_8421 = 'component_8421';
export function Component8421({ value = 8421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8421, 'data-value': derived.doubled }, children);
}
export default Component8421;
