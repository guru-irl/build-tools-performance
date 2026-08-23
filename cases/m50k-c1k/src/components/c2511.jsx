import React from 'react';
const LABEL_2511 = 'component_2511';
export function Component2511({ value = 2511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2511, 'data-value': derived.doubled }, children);
}
export default Component2511;
