import React from 'react';
const LABEL_24393 = 'component_24393';
export function Component24393({ value = 24393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24393, 'data-value': derived.doubled }, children);
}
export default Component24393;
