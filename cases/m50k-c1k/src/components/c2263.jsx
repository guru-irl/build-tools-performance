import React from 'react';
const LABEL_2263 = 'component_2263';
export function Component2263({ value = 2263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2263, 'data-value': derived.doubled }, children);
}
export default Component2263;
