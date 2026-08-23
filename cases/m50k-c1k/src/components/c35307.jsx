import React from 'react';
const LABEL_35307 = 'component_35307';
export function Component35307({ value = 35307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35307, 'data-value': derived.doubled }, children);
}
export default Component35307;
