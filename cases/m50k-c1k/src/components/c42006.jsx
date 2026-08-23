import React from 'react';
const LABEL_42006 = 'component_42006';
export function Component42006({ value = 42006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42006, 'data-value': derived.doubled }, children);
}
export default Component42006;
