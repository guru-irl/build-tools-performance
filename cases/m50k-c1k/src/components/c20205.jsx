import React from 'react';
const LABEL_20205 = 'component_20205';
export function Component20205({ value = 20205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20205, 'data-value': derived.doubled }, children);
}
export default Component20205;
