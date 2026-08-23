import React from 'react';
const LABEL_18853 = 'component_18853';
export function Component18853({ value = 18853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18853, 'data-value': derived.doubled }, children);
}
export default Component18853;
