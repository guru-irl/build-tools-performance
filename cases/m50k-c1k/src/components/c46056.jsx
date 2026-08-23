import React from 'react';
const LABEL_46056 = 'component_46056';
export function Component46056({ value = 46056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46056, 'data-value': derived.doubled }, children);
}
export default Component46056;
