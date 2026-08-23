import React from 'react';
const LABEL_10916 = 'component_10916';
export function Component10916({ value = 10916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10916, 'data-value': derived.doubled }, children);
}
export default Component10916;
