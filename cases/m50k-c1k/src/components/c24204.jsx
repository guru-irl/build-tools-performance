import React from 'react';
const LABEL_24204 = 'component_24204';
export function Component24204({ value = 24204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24204, 'data-value': derived.doubled }, children);
}
export default Component24204;
