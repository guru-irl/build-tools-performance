import React from 'react';
const LABEL_20725 = 'component_20725';
export function Component20725({ value = 20725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20725, 'data-value': derived.doubled }, children);
}
export default Component20725;
