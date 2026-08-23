import React from 'react';
const LABEL_10130 = 'component_10130';
export function Component10130({ value = 10130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10130, 'data-value': derived.doubled }, children);
}
export default Component10130;
