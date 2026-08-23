import React from 'react';
const LABEL_1282 = 'component_1282';
export function Component1282({ value = 1282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1282, 'data-value': derived.doubled }, children);
}
export default Component1282;
