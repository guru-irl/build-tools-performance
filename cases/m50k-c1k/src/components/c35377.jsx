import React from 'react';
const LABEL_35377 = 'component_35377';
export function Component35377({ value = 35377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35377, 'data-value': derived.doubled }, children);
}
export default Component35377;
