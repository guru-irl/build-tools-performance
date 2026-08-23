import React from 'react';
const LABEL_11678 = 'component_11678';
export function Component11678({ value = 11678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11678, 'data-value': derived.doubled }, children);
}
export default Component11678;
