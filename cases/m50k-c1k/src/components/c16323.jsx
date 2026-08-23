import React from 'react';
const LABEL_16323 = 'component_16323';
export function Component16323({ value = 16323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16323, 'data-value': derived.doubled }, children);
}
export default Component16323;
