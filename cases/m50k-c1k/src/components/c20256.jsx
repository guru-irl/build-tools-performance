import React from 'react';
const LABEL_20256 = 'component_20256';
export function Component20256({ value = 20256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20256, 'data-value': derived.doubled }, children);
}
export default Component20256;
