import React from 'react';
const LABEL_43030 = 'component_43030';
export function Component43030({ value = 43030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43030, 'data-value': derived.doubled }, children);
}
export default Component43030;
