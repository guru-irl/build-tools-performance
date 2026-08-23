import React from 'react';
const LABEL_1204 = 'component_1204';
export function Component1204({ value = 1204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1204, 'data-value': derived.doubled }, children);
}
export default Component1204;
