import React from 'react';
const LABEL_39336 = 'component_39336';
export function Component39336({ value = 39336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39336, 'data-value': derived.doubled }, children);
}
export default Component39336;
