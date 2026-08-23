import React from 'react';
const LABEL_42017 = 'component_42017';
export function Component42017({ value = 42017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42017, 'data-value': derived.doubled }, children);
}
export default Component42017;
