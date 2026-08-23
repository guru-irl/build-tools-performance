import React from 'react';
const LABEL_39511 = 'component_39511';
export function Component39511({ value = 39511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39511, 'data-value': derived.doubled }, children);
}
export default Component39511;
