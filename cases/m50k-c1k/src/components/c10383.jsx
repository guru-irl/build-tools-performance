import React from 'react';
const LABEL_10383 = 'component_10383';
export function Component10383({ value = 10383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10383, 'data-value': derived.doubled }, children);
}
export default Component10383;
