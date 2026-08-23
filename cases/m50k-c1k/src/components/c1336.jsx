import React from 'react';
const LABEL_1336 = 'component_1336';
export function Component1336({ value = 1336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1336, 'data-value': derived.doubled }, children);
}
export default Component1336;
