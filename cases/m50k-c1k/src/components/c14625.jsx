import React from 'react';
const LABEL_14625 = 'component_14625';
export function Component14625({ value = 14625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14625, 'data-value': derived.doubled }, children);
}
export default Component14625;
