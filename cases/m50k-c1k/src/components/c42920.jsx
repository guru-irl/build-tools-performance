import React from 'react';
const LABEL_42920 = 'component_42920';
export function Component42920({ value = 42920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42920, 'data-value': derived.doubled }, children);
}
export default Component42920;
