import React from 'react';
const LABEL_33166 = 'component_33166';
export function Component33166({ value = 33166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33166, 'data-value': derived.doubled }, children);
}
export default Component33166;
