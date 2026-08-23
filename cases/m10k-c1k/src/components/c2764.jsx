import React from 'react';
const LABEL_2764 = 'component_2764';
export function Component2764({ value = 2764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2764, 'data-value': derived.doubled }, children);
}
export default Component2764;
