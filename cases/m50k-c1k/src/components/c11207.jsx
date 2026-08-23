import React from 'react';
const LABEL_11207 = 'component_11207';
export function Component11207({ value = 11207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11207, 'data-value': derived.doubled }, children);
}
export default Component11207;
