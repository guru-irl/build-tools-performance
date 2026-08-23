import React from 'react';
const LABEL_42544 = 'component_42544';
export function Component42544({ value = 42544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42544, 'data-value': derived.doubled }, children);
}
export default Component42544;
