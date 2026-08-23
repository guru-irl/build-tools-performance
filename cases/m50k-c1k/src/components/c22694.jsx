import React from 'react';
const LABEL_22694 = 'component_22694';
export function Component22694({ value = 22694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22694, 'data-value': derived.doubled }, children);
}
export default Component22694;
