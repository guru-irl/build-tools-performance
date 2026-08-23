import React from 'react';
const LABEL_36563 = 'component_36563';
export function Component36563({ value = 36563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36563, 'data-value': derived.doubled }, children);
}
export default Component36563;
