import React from 'react';
const LABEL_24068 = 'component_24068';
export function Component24068({ value = 24068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24068, 'data-value': derived.doubled }, children);
}
export default Component24068;
