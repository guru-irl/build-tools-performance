import React from 'react';
const LABEL_21307 = 'component_21307';
export function Component21307({ value = 21307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21307, 'data-value': derived.doubled }, children);
}
export default Component21307;
