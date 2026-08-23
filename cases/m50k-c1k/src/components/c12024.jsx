import React from 'react';
const LABEL_12024 = 'component_12024';
export function Component12024({ value = 12024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12024, 'data-value': derived.doubled }, children);
}
export default Component12024;
