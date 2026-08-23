import React from 'react';
const LABEL_20932 = 'component_20932';
export function Component20932({ value = 20932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20932, 'data-value': derived.doubled }, children);
}
export default Component20932;
