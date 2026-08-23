import React from 'react';
const LABEL_27557 = 'component_27557';
export function Component27557({ value = 27557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27557, 'data-value': derived.doubled }, children);
}
export default Component27557;
