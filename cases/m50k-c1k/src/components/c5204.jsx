import React from 'react';
const LABEL_5204 = 'component_5204';
export function Component5204({ value = 5204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5204, 'data-value': derived.doubled }, children);
}
export default Component5204;
