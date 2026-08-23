import React from 'react';
const LABEL_8204 = 'component_8204';
export function Component8204({ value = 8204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8204, 'data-value': derived.doubled }, children);
}
export default Component8204;
