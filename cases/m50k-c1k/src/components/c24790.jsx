import React from 'react';
const LABEL_24790 = 'component_24790';
export function Component24790({ value = 24790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24790, 'data-value': derived.doubled }, children);
}
export default Component24790;
