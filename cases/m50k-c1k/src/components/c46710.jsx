import React from 'react';
const LABEL_46710 = 'component_46710';
export function Component46710({ value = 46710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46710, 'data-value': derived.doubled }, children);
}
export default Component46710;
