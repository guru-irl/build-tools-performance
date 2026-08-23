import React from 'react';
const LABEL_28864 = 'component_28864';
export function Component28864({ value = 28864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28864, 'data-value': derived.doubled }, children);
}
export default Component28864;
