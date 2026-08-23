import React from 'react';
const LABEL_23660 = 'component_23660';
export function Component23660({ value = 23660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23660, 'data-value': derived.doubled }, children);
}
export default Component23660;
