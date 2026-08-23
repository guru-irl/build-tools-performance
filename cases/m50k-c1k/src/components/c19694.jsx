import React from 'react';
const LABEL_19694 = 'component_19694';
export function Component19694({ value = 19694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19694, 'data-value': derived.doubled }, children);
}
export default Component19694;
