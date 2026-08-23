import React from 'react';
const LABEL_1056 = 'component_1056';
export function Component1056({ value = 1056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1056, 'data-value': derived.doubled }, children);
}
export default Component1056;
