import React from 'react';
const LABEL_34238 = 'component_34238';
export function Component34238({ value = 34238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34238, 'data-value': derived.doubled }, children);
}
export default Component34238;
