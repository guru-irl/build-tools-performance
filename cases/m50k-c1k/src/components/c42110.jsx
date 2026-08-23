import React from 'react';
const LABEL_42110 = 'component_42110';
export function Component42110({ value = 42110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42110, 'data-value': derived.doubled }, children);
}
export default Component42110;
