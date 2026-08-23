import React from 'react';
const LABEL_45474 = 'component_45474';
export function Component45474({ value = 45474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45474, 'data-value': derived.doubled }, children);
}
export default Component45474;
