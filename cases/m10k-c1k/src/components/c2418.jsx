import React from 'react';
const LABEL_2418 = 'component_2418';
export function Component2418({ value = 2418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2418, 'data-value': derived.doubled }, children);
}
export default Component2418;
