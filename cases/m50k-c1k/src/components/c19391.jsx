import React from 'react';
const LABEL_19391 = 'component_19391';
export function Component19391({ value = 19391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19391, 'data-value': derived.doubled }, children);
}
export default Component19391;
