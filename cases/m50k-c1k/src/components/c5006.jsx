import React from 'react';
const LABEL_5006 = 'component_5006';
export function Component5006({ value = 5006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5006, 'data-value': derived.doubled }, children);
}
export default Component5006;
