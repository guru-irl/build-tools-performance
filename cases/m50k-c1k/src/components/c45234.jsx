import React from 'react';
const LABEL_45234 = 'component_45234';
export function Component45234({ value = 45234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45234, 'data-value': derived.doubled }, children);
}
export default Component45234;
