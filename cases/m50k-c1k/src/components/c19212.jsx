import React from 'react';
const LABEL_19212 = 'component_19212';
export function Component19212({ value = 19212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19212, 'data-value': derived.doubled }, children);
}
export default Component19212;
