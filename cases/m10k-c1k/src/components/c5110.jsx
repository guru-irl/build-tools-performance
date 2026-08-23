import React from 'react';
const LABEL_5110 = 'component_5110';
export function Component5110({ value = 5110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5110, 'data-value': derived.doubled }, children);
}
export default Component5110;
