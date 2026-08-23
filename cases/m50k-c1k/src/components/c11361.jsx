import React from 'react';
const LABEL_11361 = 'component_11361';
export function Component11361({ value = 11361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11361, 'data-value': derived.doubled }, children);
}
export default Component11361;
