import React from 'react';
const LABEL_27033 = 'component_27033';
export function Component27033({ value = 27033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27033, 'data-value': derived.doubled }, children);
}
export default Component27033;
