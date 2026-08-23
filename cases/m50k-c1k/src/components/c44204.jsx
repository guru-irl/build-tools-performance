import React from 'react';
const LABEL_44204 = 'component_44204';
export function Component44204({ value = 44204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44204, 'data-value': derived.doubled }, children);
}
export default Component44204;
