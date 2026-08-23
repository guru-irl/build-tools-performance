import React from 'react';
const LABEL_33615 = 'component_33615';
export function Component33615({ value = 33615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33615, 'data-value': derived.doubled }, children);
}
export default Component33615;
