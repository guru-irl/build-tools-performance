import React from 'react';
const LABEL_45458 = 'component_45458';
export function Component45458({ value = 45458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45458, 'data-value': derived.doubled }, children);
}
export default Component45458;
