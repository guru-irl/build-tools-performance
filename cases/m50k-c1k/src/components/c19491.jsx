import React from 'react';
const LABEL_19491 = 'component_19491';
export function Component19491({ value = 19491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19491, 'data-value': derived.doubled }, children);
}
export default Component19491;
