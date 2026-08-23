import React from 'react';
const LABEL_22424 = 'component_22424';
export function Component22424({ value = 22424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22424, 'data-value': derived.doubled }, children);
}
export default Component22424;
