import React from 'react';
const LABEL_13989 = 'component_13989';
export function Component13989({ value = 13989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13989, 'data-value': derived.doubled }, children);
}
export default Component13989;
