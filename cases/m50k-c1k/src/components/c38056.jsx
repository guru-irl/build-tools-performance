import React from 'react';
const LABEL_38056 = 'component_38056';
export function Component38056({ value = 38056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38056, 'data-value': derived.doubled }, children);
}
export default Component38056;
