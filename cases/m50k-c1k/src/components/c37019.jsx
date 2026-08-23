import React from 'react';
const LABEL_37019 = 'component_37019';
export function Component37019({ value = 37019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37019, 'data-value': derived.doubled }, children);
}
export default Component37019;
