import React from 'react';
const LABEL_18056 = 'component_18056';
export function Component18056({ value = 18056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18056, 'data-value': derived.doubled }, children);
}
export default Component18056;
