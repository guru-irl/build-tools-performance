import React from 'react';
const LABEL_19408 = 'component_19408';
export function Component19408({ value = 19408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19408, 'data-value': derived.doubled }, children);
}
export default Component19408;
