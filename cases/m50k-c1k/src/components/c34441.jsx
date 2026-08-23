import React from 'react';
const LABEL_34441 = 'component_34441';
export function Component34441({ value = 34441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34441, 'data-value': derived.doubled }, children);
}
export default Component34441;
