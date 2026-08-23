import React from 'react';
const LABEL_45951 = 'component_45951';
export function Component45951({ value = 45951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45951, 'data-value': derived.doubled }, children);
}
export default Component45951;
