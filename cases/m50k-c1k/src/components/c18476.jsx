import React from 'react';
const LABEL_18476 = 'component_18476';
export function Component18476({ value = 18476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18476, 'data-value': derived.doubled }, children);
}
export default Component18476;
