import React from 'react';
const LABEL_11505 = 'component_11505';
export function Component11505({ value = 11505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11505, 'data-value': derived.doubled }, children);
}
export default Component11505;
