import React from 'react';
const LABEL_27540 = 'component_27540';
export function Component27540({ value = 27540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27540, 'data-value': derived.doubled }, children);
}
export default Component27540;
