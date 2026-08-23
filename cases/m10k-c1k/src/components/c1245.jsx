import React from 'react';
const LABEL_1245 = 'component_1245';
export function Component1245({ value = 1245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1245, 'data-value': derived.doubled }, children);
}
export default Component1245;
