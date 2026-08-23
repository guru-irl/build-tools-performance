import React from 'react';
const LABEL_19340 = 'component_19340';
export function Component19340({ value = 19340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19340, 'data-value': derived.doubled }, children);
}
export default Component19340;
