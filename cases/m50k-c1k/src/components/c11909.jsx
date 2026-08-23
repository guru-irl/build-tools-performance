import React from 'react';
const LABEL_11909 = 'component_11909';
export function Component11909({ value = 11909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11909, 'data-value': derived.doubled }, children);
}
export default Component11909;
