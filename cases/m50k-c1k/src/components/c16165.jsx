import React from 'react';
const LABEL_16165 = 'component_16165';
export function Component16165({ value = 16165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16165, 'data-value': derived.doubled }, children);
}
export default Component16165;
