import React from 'react';
const LABEL_1329 = 'component_1329';
export function Component1329({ value = 1329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1329, 'data-value': derived.doubled }, children);
}
export default Component1329;
