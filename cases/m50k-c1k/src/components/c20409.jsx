import React from 'react';
const LABEL_20409 = 'component_20409';
export function Component20409({ value = 20409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20409, 'data-value': derived.doubled }, children);
}
export default Component20409;
