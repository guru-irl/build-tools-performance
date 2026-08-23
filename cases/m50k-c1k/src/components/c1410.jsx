import React from 'react';
const LABEL_1410 = 'component_1410';
export function Component1410({ value = 1410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1410, 'data-value': derived.doubled }, children);
}
export default Component1410;
