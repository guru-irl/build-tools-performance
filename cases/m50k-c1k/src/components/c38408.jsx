import React from 'react';
const LABEL_38408 = 'component_38408';
export function Component38408({ value = 38408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38408, 'data-value': derived.doubled }, children);
}
export default Component38408;
