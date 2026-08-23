import React from 'react';
const LABEL_5056 = 'component_5056';
export function Component5056({ value = 5056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5056, 'data-value': derived.doubled }, children);
}
export default Component5056;
