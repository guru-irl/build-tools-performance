import React from 'react';
const LABEL_18408 = 'component_18408';
export function Component18408({ value = 18408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18408, 'data-value': derived.doubled }, children);
}
export default Component18408;
