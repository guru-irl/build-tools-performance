import React from 'react';
const LABEL_13873 = 'component_13873';
export function Component13873({ value = 13873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13873, 'data-value': derived.doubled }, children);
}
export default Component13873;
