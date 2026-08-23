import React from 'react';
const LABEL_13856 = 'component_13856';
export function Component13856({ value = 13856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13856, 'data-value': derived.doubled }, children);
}
export default Component13856;
