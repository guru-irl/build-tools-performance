import React from 'react';
const LABEL_1331 = 'component_1331';
export function Component1331({ value = 1331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1331, 'data-value': derived.doubled }, children);
}
export default Component1331;
