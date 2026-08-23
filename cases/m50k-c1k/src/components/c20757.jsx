import React from 'react';
const LABEL_20757 = 'component_20757';
export function Component20757({ value = 20757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20757, 'data-value': derived.doubled }, children);
}
export default Component20757;
