import React from 'react';
const LABEL_1260 = 'component_1260';
export function Component1260({ value = 1260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1260, 'data-value': derived.doubled }, children);
}
export default Component1260;
