import React from 'react';
const LABEL_24110 = 'component_24110';
export function Component24110({ value = 24110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24110, 'data-value': derived.doubled }, children);
}
export default Component24110;
