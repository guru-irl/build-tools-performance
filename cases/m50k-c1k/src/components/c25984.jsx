import React from 'react';
const LABEL_25984 = 'component_25984';
export function Component25984({ value = 25984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25984, 'data-value': derived.doubled }, children);
}
export default Component25984;
