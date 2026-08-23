import React from 'react';
const LABEL_5511 = 'component_5511';
export function Component5511({ value = 5511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5511, 'data-value': derived.doubled }, children);
}
export default Component5511;
