import React from 'react';
const LABEL_13006 = 'component_13006';
export function Component13006({ value = 13006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13006, 'data-value': derived.doubled }, children);
}
export default Component13006;
