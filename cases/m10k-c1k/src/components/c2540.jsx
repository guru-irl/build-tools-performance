import React from 'react';
const LABEL_2540 = 'component_2540';
export function Component2540({ value = 2540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2540, 'data-value': derived.doubled }, children);
}
export default Component2540;
