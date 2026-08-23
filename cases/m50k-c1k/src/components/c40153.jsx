import React from 'react';
const LABEL_40153 = 'component_40153';
export function Component40153({ value = 40153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40153, 'data-value': derived.doubled }, children);
}
export default Component40153;
