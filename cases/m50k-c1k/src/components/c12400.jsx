import React from 'react';
const LABEL_12400 = 'component_12400';
export function Component12400({ value = 12400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12400, 'data-value': derived.doubled }, children);
}
export default Component12400;
