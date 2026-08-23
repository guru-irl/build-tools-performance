import React from 'react';
const LABEL_19421 = 'component_19421';
export function Component19421({ value = 19421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19421, 'data-value': derived.doubled }, children);
}
export default Component19421;
