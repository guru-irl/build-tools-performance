import React from 'react';
const LABEL_27825 = 'component_27825';
export function Component27825({ value = 27825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27825, 'data-value': derived.doubled }, children);
}
export default Component27825;
