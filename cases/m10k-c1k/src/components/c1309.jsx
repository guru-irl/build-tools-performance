import React from 'react';
const LABEL_1309 = 'component_1309';
export function Component1309({ value = 1309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1309, 'data-value': derived.doubled }, children);
}
export default Component1309;
