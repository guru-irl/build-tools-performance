import React from 'react';
const LABEL_19617 = 'component_19617';
export function Component19617({ value = 19617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19617, 'data-value': derived.doubled }, children);
}
export default Component19617;
