import React from 'react';
const LABEL_11694 = 'component_11694';
export function Component11694({ value = 11694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11694, 'data-value': derived.doubled }, children);
}
export default Component11694;
