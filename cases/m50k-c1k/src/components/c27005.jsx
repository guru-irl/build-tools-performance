import React from 'react';
const LABEL_27005 = 'component_27005';
export function Component27005({ value = 27005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27005, 'data-value': derived.doubled }, children);
}
export default Component27005;
