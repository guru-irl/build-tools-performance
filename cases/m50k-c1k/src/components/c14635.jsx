import React from 'react';
const LABEL_14635 = 'component_14635';
export function Component14635({ value = 14635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14635, 'data-value': derived.doubled }, children);
}
export default Component14635;
