import React from 'react';
const LABEL_45170 = 'component_45170';
export function Component45170({ value = 45170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45170, 'data-value': derived.doubled }, children);
}
export default Component45170;
