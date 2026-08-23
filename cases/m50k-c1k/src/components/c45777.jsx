import React from 'react';
const LABEL_45777 = 'component_45777';
export function Component45777({ value = 45777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45777, 'data-value': derived.doubled }, children);
}
export default Component45777;
