import React from 'react';
const LABEL_7984 = 'component_7984';
export function Component7984({ value = 7984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7984, 'data-value': derived.doubled }, children);
}
export default Component7984;
