import React from 'react';
const LABEL_13710 = 'component_13710';
export function Component13710({ value = 13710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13710, 'data-value': derived.doubled }, children);
}
export default Component13710;
