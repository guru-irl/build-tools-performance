import React from 'react';
const LABEL_46307 = 'component_46307';
export function Component46307({ value = 46307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46307, 'data-value': derived.doubled }, children);
}
export default Component46307;
