import React from 'react';
const LABEL_4056 = 'component_4056';
export function Component4056({ value = 4056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4056, 'data-value': derived.doubled }, children);
}
export default Component4056;
