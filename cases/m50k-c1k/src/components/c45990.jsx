import React from 'react';
const LABEL_45990 = 'component_45990';
export function Component45990({ value = 45990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45990, 'data-value': derived.doubled }, children);
}
export default Component45990;
