import React from 'react';
const LABEL_18393 = 'component_18393';
export function Component18393({ value = 18393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18393, 'data-value': derived.doubled }, children);
}
export default Component18393;
