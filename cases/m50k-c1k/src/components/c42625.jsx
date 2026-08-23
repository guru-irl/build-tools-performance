import React from 'react';
const LABEL_42625 = 'component_42625';
export function Component42625({ value = 42625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42625, 'data-value': derived.doubled }, children);
}
export default Component42625;
