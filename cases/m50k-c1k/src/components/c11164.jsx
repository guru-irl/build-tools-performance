import React from 'react';
const LABEL_11164 = 'component_11164';
export function Component11164({ value = 11164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11164, 'data-value': derived.doubled }, children);
}
export default Component11164;
