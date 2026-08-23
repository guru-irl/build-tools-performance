import React from 'react';
const LABEL_45694 = 'component_45694';
export function Component45694({ value = 45694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45694, 'data-value': derived.doubled }, children);
}
export default Component45694;
