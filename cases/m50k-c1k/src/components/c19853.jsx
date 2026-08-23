import React from 'react';
const LABEL_19853 = 'component_19853';
export function Component19853({ value = 19853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19853, 'data-value': derived.doubled }, children);
}
export default Component19853;
