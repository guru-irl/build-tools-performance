import React from 'react';
const LABEL_31140 = 'component_31140';
export function Component31140({ value = 31140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31140, 'data-value': derived.doubled }, children);
}
export default Component31140;
