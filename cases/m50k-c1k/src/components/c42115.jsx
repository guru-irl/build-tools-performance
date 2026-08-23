import React from 'react';
const LABEL_42115 = 'component_42115';
export function Component42115({ value = 42115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42115, 'data-value': derived.doubled }, children);
}
export default Component42115;
