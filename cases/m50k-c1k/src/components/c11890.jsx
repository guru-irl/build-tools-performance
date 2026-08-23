import React from 'react';
const LABEL_11890 = 'component_11890';
export function Component11890({ value = 11890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11890, 'data-value': derived.doubled }, children);
}
export default Component11890;
