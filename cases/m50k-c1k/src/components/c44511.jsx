import React from 'react';
const LABEL_44511 = 'component_44511';
export function Component44511({ value = 44511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44511, 'data-value': derived.doubled }, children);
}
export default Component44511;
