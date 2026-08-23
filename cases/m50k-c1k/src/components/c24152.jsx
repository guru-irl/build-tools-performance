import React from 'react';
const LABEL_24152 = 'component_24152';
export function Component24152({ value = 24152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24152, 'data-value': derived.doubled }, children);
}
export default Component24152;
