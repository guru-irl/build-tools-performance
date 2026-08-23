import React from 'react';
const LABEL_19667 = 'component_19667';
export function Component19667({ value = 19667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19667, 'data-value': derived.doubled }, children);
}
export default Component19667;
