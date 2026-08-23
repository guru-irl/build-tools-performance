import React from 'react';
const LABEL_24607 = 'component_24607';
export function Component24607({ value = 24607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24607, 'data-value': derived.doubled }, children);
}
export default Component24607;
