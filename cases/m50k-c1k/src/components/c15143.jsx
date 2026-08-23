import React from 'react';
const LABEL_15143 = 'component_15143';
export function Component15143({ value = 15143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15143, 'data-value': derived.doubled }, children);
}
export default Component15143;
