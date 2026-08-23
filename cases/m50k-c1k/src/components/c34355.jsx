import React from 'react';
const LABEL_34355 = 'component_34355';
export function Component34355({ value = 34355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34355, 'data-value': derived.doubled }, children);
}
export default Component34355;
