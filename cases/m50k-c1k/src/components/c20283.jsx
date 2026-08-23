import React from 'react';
const LABEL_20283 = 'component_20283';
export function Component20283({ value = 20283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20283, 'data-value': derived.doubled }, children);
}
export default Component20283;
