import React from 'react';
const LABEL_29390 = 'component_29390';
export function Component29390({ value = 29390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29390, 'data-value': derived.doubled }, children);
}
export default Component29390;
