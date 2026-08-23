import React from 'react';
const LABEL_16429 = 'component_16429';
export function Component16429({ value = 16429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16429, 'data-value': derived.doubled }, children);
}
export default Component16429;
