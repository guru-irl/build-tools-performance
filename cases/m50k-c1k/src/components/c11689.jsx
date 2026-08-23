import React from 'react';
const LABEL_11689 = 'component_11689';
export function Component11689({ value = 11689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11689, 'data-value': derived.doubled }, children);
}
export default Component11689;
