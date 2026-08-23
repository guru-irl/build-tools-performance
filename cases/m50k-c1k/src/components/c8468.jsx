import React from 'react';
const LABEL_8468 = 'component_8468';
export function Component8468({ value = 8468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8468, 'data-value': derived.doubled }, children);
}
export default Component8468;
