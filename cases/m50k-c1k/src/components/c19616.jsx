import React from 'react';
const LABEL_19616 = 'component_19616';
export function Component19616({ value = 19616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19616, 'data-value': derived.doubled }, children);
}
export default Component19616;
