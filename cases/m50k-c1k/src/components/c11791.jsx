import React from 'react';
const LABEL_11791 = 'component_11791';
export function Component11791({ value = 11791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11791, 'data-value': derived.doubled }, children);
}
export default Component11791;
