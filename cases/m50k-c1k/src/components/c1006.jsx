import React from 'react';
const LABEL_1006 = 'component_1006';
export function Component1006({ value = 1006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1006, 'data-value': derived.doubled }, children);
}
export default Component1006;
