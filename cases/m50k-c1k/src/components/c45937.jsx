import React from 'react';
const LABEL_45937 = 'component_45937';
export function Component45937({ value = 45937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45937, 'data-value': derived.doubled }, children);
}
export default Component45937;
