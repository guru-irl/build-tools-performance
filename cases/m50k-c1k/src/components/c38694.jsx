import React from 'react';
const LABEL_38694 = 'component_38694';
export function Component38694({ value = 38694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38694, 'data-value': derived.doubled }, children);
}
export default Component38694;
