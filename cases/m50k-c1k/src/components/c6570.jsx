import React from 'react';
const LABEL_6570 = 'component_6570';
export function Component6570({ value = 6570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6570, 'data-value': derived.doubled }, children);
}
export default Component6570;
