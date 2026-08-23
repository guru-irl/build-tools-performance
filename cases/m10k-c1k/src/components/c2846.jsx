import React from 'react';
const LABEL_2846 = 'component_2846';
export function Component2846({ value = 2846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2846, 'data-value': derived.doubled }, children);
}
export default Component2846;
