import React from 'react';
const LABEL_27520 = 'component_27520';
export function Component27520({ value = 27520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27520, 'data-value': derived.doubled }, children);
}
export default Component27520;
