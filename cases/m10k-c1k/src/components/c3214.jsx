import React from 'react';
const LABEL_3214 = 'component_3214';
export function Component3214({ value = 3214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3214, 'data-value': derived.doubled }, children);
}
export default Component3214;
