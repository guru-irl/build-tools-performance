import React from 'react';
const LABEL_1008 = 'component_1008';
export function Component1008({ value = 1008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1008, 'data-value': derived.doubled }, children);
}
export default Component1008;
