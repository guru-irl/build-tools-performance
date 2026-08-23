import React from 'react';
const LABEL_27665 = 'component_27665';
export function Component27665({ value = 27665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27665, 'data-value': derived.doubled }, children);
}
export default Component27665;
