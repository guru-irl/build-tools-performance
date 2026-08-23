import React from 'react';
const LABEL_1130 = 'component_1130';
export function Component1130({ value = 1130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1130, 'data-value': derived.doubled }, children);
}
export default Component1130;
