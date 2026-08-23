import React from 'react';
const LABEL_29583 = 'component_29583';
export function Component29583({ value = 29583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29583, 'data-value': derived.doubled }, children);
}
export default Component29583;
