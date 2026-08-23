import React from 'react';
const LABEL_27730 = 'component_27730';
export function Component27730({ value = 27730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27730, 'data-value': derived.doubled }, children);
}
export default Component27730;
