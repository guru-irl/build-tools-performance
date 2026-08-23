import React from 'react';
const LABEL_43307 = 'component_43307';
export function Component43307({ value = 43307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43307, 'data-value': derived.doubled }, children);
}
export default Component43307;
