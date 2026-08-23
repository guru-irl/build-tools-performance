import React from 'react';
const LABEL_35582 = 'component_35582';
export function Component35582({ value = 35582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35582, 'data-value': derived.doubled }, children);
}
export default Component35582;
