import React from 'react';
const LABEL_22704 = 'component_22704';
export function Component22704({ value = 22704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22704, 'data-value': derived.doubled }, children);
}
export default Component22704;
