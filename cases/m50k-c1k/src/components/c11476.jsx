import React from 'react';
const LABEL_11476 = 'component_11476';
export function Component11476({ value = 11476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11476, 'data-value': derived.doubled }, children);
}
export default Component11476;
