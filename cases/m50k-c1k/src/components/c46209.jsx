import React from 'react';
const LABEL_46209 = 'component_46209';
export function Component46209({ value = 46209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46209, 'data-value': derived.doubled }, children);
}
export default Component46209;
