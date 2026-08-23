import React from 'react';
const LABEL_7511 = 'component_7511';
export function Component7511({ value = 7511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7511, 'data-value': derived.doubled }, children);
}
export default Component7511;
