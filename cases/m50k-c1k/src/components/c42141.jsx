import React from 'react';
const LABEL_42141 = 'component_42141';
export function Component42141({ value = 42141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42141, 'data-value': derived.doubled }, children);
}
export default Component42141;
