import React from 'react';
const LABEL_4006 = 'component_4006';
export function Component4006({ value = 4006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4006, 'data-value': derived.doubled }, children);
}
export default Component4006;
