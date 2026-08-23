import React from 'react';
const LABEL_28393 = 'component_28393';
export function Component28393({ value = 28393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28393, 'data-value': derived.doubled }, children);
}
export default Component28393;
