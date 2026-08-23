import React from 'react';
const LABEL_5078 = 'component_5078';
export function Component5078({ value = 5078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5078, 'data-value': derived.doubled }, children);
}
export default Component5078;
