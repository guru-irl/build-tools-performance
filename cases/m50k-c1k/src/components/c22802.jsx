import React from 'react';
const LABEL_22802 = 'component_22802';
export function Component22802({ value = 22802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22802, 'data-value': derived.doubled }, children);
}
export default Component22802;
