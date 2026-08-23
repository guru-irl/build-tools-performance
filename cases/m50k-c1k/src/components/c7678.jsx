import React from 'react';
const LABEL_7678 = 'component_7678';
export function Component7678({ value = 7678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7678, 'data-value': derived.doubled }, children);
}
export default Component7678;
