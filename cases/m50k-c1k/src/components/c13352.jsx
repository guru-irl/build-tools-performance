import React from 'react';
const LABEL_13352 = 'component_13352';
export function Component13352({ value = 13352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13352, 'data-value': derived.doubled }, children);
}
export default Component13352;
