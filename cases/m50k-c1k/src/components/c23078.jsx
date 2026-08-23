import React from 'react';
const LABEL_23078 = 'component_23078';
export function Component23078({ value = 23078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23078, 'data-value': derived.doubled }, children);
}
export default Component23078;
