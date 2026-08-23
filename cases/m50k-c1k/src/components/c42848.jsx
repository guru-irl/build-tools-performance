import React from 'react';
const LABEL_42848 = 'component_42848';
export function Component42848({ value = 42848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42848, 'data-value': derived.doubled }, children);
}
export default Component42848;
