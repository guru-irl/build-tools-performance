import React from 'react';
const LABEL_6391 = 'component_6391';
export function Component6391({ value = 6391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6391, 'data-value': derived.doubled }, children);
}
export default Component6391;
