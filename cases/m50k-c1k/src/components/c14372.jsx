import React from 'react';
const LABEL_14372 = 'component_14372';
export function Component14372({ value = 14372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14372, 'data-value': derived.doubled }, children);
}
export default Component14372;
