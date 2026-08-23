import React from 'react';
const LABEL_1450 = 'component_1450';
export function Component1450({ value = 1450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1450, 'data-value': derived.doubled }, children);
}
export default Component1450;
