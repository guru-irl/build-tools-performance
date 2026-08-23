import React from 'react';
const LABEL_22204 = 'component_22204';
export function Component22204({ value = 22204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22204, 'data-value': derived.doubled }, children);
}
export default Component22204;
