import React from 'react';
const LABEL_27793 = 'component_27793';
export function Component27793({ value = 27793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27793, 'data-value': derived.doubled }, children);
}
export default Component27793;
