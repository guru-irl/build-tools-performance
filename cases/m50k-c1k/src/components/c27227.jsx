import React from 'react';
const LABEL_27227 = 'component_27227';
export function Component27227({ value = 27227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27227, 'data-value': derived.doubled }, children);
}
export default Component27227;
