import React from 'react';
const LABEL_19150 = 'component_19150';
export function Component19150({ value = 19150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19150, 'data-value': derived.doubled }, children);
}
export default Component19150;
