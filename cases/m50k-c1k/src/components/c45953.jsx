import React from 'react';
const LABEL_45953 = 'component_45953';
export function Component45953({ value = 45953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45953, 'data-value': derived.doubled }, children);
}
export default Component45953;
