import React from 'react';
const LABEL_14056 = 'component_14056';
export function Component14056({ value = 14056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14056, 'data-value': derived.doubled }, children);
}
export default Component14056;
