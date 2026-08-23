import React from 'react';
const LABEL_34126 = 'component_34126';
export function Component34126({ value = 34126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34126, 'data-value': derived.doubled }, children);
}
export default Component34126;
