import React from 'react';
const LABEL_27764 = 'component_27764';
export function Component27764({ value = 27764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27764, 'data-value': derived.doubled }, children);
}
export default Component27764;
