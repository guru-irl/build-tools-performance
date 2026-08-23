import React from 'react';
const LABEL_2933 = 'component_2933';
export function Component2933({ value = 2933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2933, 'data-value': derived.doubled }, children);
}
export default Component2933;
