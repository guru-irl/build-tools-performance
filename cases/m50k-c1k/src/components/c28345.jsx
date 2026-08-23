import React from 'react';
const LABEL_28345 = 'component_28345';
export function Component28345({ value = 28345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28345, 'data-value': derived.doubled }, children);
}
export default Component28345;
