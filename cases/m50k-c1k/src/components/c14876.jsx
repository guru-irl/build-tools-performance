import React from 'react';
const LABEL_14876 = 'component_14876';
export function Component14876({ value = 14876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14876, 'data-value': derived.doubled }, children);
}
export default Component14876;
