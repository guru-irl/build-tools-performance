import React from 'react';
const LABEL_16541 = 'component_16541';
export function Component16541({ value = 16541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16541, 'data-value': derived.doubled }, children);
}
export default Component16541;
