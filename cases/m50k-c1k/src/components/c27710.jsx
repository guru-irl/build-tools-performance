import React from 'react';
const LABEL_27710 = 'component_27710';
export function Component27710({ value = 27710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27710, 'data-value': derived.doubled }, children);
}
export default Component27710;
