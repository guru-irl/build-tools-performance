import React from 'react';
const LABEL_26525 = 'component_26525';
export function Component26525({ value = 26525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26525, 'data-value': derived.doubled }, children);
}
export default Component26525;
