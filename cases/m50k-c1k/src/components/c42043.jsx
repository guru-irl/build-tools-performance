import React from 'react';
const LABEL_42043 = 'component_42043';
export function Component42043({ value = 42043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42043, 'data-value': derived.doubled }, children);
}
export default Component42043;
