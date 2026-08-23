import React from 'react';
const LABEL_27204 = 'component_27204';
export function Component27204({ value = 27204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27204, 'data-value': derived.doubled }, children);
}
export default Component27204;
