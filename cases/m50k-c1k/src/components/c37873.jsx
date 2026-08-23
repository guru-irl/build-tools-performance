import React from 'react';
const LABEL_37873 = 'component_37873';
export function Component37873({ value = 37873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37873, 'data-value': derived.doubled }, children);
}
export default Component37873;
