import React from 'react';
const LABEL_37110 = 'component_37110';
export function Component37110({ value = 37110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37110, 'data-value': derived.doubled }, children);
}
export default Component37110;
