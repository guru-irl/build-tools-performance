import React from 'react';
const LABEL_5113 = 'component_5113';
export function Component5113({ value = 5113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5113, 'data-value': derived.doubled }, children);
}
export default Component5113;
