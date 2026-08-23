import React from 'react';
const LABEL_24062 = 'component_24062';
export function Component24062({ value = 24062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24062, 'data-value': derived.doubled }, children);
}
export default Component24062;
