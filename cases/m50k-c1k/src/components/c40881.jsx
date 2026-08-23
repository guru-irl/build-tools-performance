import React from 'react';
const LABEL_40881 = 'component_40881';
export function Component40881({ value = 40881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40881, 'data-value': derived.doubled }, children);
}
export default Component40881;
