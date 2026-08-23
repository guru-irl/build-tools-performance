import React from 'react';
const LABEL_8207 = 'component_8207';
export function Component8207({ value = 8207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8207, 'data-value': derived.doubled }, children);
}
export default Component8207;
