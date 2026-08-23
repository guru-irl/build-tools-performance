import React from 'react';
const LABEL_16400 = 'component_16400';
export function Component16400({ value = 16400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16400, 'data-value': derived.doubled }, children);
}
export default Component16400;
