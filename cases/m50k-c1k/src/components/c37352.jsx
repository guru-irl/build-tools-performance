import React from 'react';
const LABEL_37352 = 'component_37352';
export function Component37352({ value = 37352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37352, 'data-value': derived.doubled }, children);
}
export default Component37352;
