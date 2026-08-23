import React from 'react';
const LABEL_5265 = 'component_5265';
export function Component5265({ value = 5265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5265, 'data-value': derived.doubled }, children);
}
export default Component5265;
