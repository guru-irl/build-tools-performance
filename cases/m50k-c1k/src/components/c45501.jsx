import React from 'react';
const LABEL_45501 = 'component_45501';
export function Component45501({ value = 45501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45501, 'data-value': derived.doubled }, children);
}
export default Component45501;
