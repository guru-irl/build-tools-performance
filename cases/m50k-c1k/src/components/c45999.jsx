import React from 'react';
const LABEL_45999 = 'component_45999';
export function Component45999({ value = 45999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45999, 'data-value': derived.doubled }, children);
}
export default Component45999;
