import React from 'react';
const LABEL_24325 = 'component_24325';
export function Component24325({ value = 24325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24325, 'data-value': derived.doubled }, children);
}
export default Component24325;
