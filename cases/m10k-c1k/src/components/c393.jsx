import React from 'react';
const LABEL_393 = 'component_393';
export function Component393({ value = 393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_393, 'data-value': derived.doubled }, children);
}
export default Component393;
