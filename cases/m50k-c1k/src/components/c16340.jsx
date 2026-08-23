import React from 'react';
const LABEL_16340 = 'component_16340';
export function Component16340({ value = 16340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16340, 'data-value': derived.doubled }, children);
}
export default Component16340;
