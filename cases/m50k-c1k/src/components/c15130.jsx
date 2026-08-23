import React from 'react';
const LABEL_15130 = 'component_15130';
export function Component15130({ value = 15130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15130, 'data-value': derived.doubled }, children);
}
export default Component15130;
