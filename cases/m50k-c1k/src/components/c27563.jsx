import React from 'react';
const LABEL_27563 = 'component_27563';
export function Component27563({ value = 27563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27563, 'data-value': derived.doubled }, children);
}
export default Component27563;
