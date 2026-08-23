import React from 'react';
const LABEL_46283 = 'component_46283';
export function Component46283({ value = 46283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46283, 'data-value': derived.doubled }, children);
}
export default Component46283;
