import React from 'react';
const LABEL_14853 = 'component_14853';
export function Component14853({ value = 14853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14853, 'data-value': derived.doubled }, children);
}
export default Component14853;
