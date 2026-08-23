import React from 'react';
const LABEL_11044 = 'component_11044';
export function Component11044({ value = 11044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11044, 'data-value': derived.doubled }, children);
}
export default Component11044;
