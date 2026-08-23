import React from 'react';
const LABEL_28373 = 'component_28373';
export function Component28373({ value = 28373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28373, 'data-value': derived.doubled }, children);
}
export default Component28373;
