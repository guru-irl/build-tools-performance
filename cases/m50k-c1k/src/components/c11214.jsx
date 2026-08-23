import React from 'react';
const LABEL_11214 = 'component_11214';
export function Component11214({ value = 11214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11214, 'data-value': derived.doubled }, children);
}
export default Component11214;
