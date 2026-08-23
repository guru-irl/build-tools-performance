import React from 'react';
const LABEL_15939 = 'component_15939';
export function Component15939({ value = 15939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15939, 'data-value': derived.doubled }, children);
}
export default Component15939;
