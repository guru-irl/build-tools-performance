import React from 'react';
const LABEL_15166 = 'component_15166';
export function Component15166({ value = 15166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15166, 'data-value': derived.doubled }, children);
}
export default Component15166;
