import React from 'react';
const LABEL_27671 = 'component_27671';
export function Component27671({ value = 27671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27671, 'data-value': derived.doubled }, children);
}
export default Component27671;
