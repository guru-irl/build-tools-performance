import React from 'react';
const LABEL_27666 = 'component_27666';
export function Component27666({ value = 27666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27666, 'data-value': derived.doubled }, children);
}
export default Component27666;
