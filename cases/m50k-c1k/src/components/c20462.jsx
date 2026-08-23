import React from 'react';
const LABEL_20462 = 'component_20462';
export function Component20462({ value = 20462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20462, 'data-value': derived.doubled }, children);
}
export default Component20462;
