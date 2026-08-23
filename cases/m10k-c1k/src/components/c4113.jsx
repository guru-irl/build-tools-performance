import React from 'react';
const LABEL_4113 = 'component_4113';
export function Component4113({ value = 4113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4113, 'data-value': derived.doubled }, children);
}
export default Component4113;
