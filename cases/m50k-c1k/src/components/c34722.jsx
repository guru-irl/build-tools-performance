import React from 'react';
const LABEL_34722 = 'component_34722';
export function Component34722({ value = 34722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34722, 'data-value': derived.doubled }, children);
}
export default Component34722;
