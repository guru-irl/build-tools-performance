import React from 'react';
const LABEL_11959 = 'component_11959';
export function Component11959({ value = 11959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11959, 'data-value': derived.doubled }, children);
}
export default Component11959;
