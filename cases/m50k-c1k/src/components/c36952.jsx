import React from 'react';
const LABEL_36952 = 'component_36952';
export function Component36952({ value = 36952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36952, 'data-value': derived.doubled }, children);
}
export default Component36952;
