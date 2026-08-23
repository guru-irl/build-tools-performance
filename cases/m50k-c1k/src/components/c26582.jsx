import React from 'react';
const LABEL_26582 = 'component_26582';
export function Component26582({ value = 26582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26582, 'data-value': derived.doubled }, children);
}
export default Component26582;
