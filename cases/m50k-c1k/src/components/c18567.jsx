import React from 'react';
const LABEL_18567 = 'component_18567';
export function Component18567({ value = 18567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18567, 'data-value': derived.doubled }, children);
}
export default Component18567;
