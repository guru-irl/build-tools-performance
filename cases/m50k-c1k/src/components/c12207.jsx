import React from 'react';
const LABEL_12207 = 'component_12207';
export function Component12207({ value = 12207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12207, 'data-value': derived.doubled }, children);
}
export default Component12207;
