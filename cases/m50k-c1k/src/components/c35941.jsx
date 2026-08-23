import React from 'react';
const LABEL_35941 = 'component_35941';
export function Component35941({ value = 35941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35941, 'data-value': derived.doubled }, children);
}
export default Component35941;
