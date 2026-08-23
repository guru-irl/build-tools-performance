import React from 'react';
const LABEL_2139 = 'component_2139';
export function Component2139({ value = 2139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2139, 'data-value': derived.doubled }, children);
}
export default Component2139;
