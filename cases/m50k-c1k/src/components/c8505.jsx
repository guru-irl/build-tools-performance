import React from 'react';
const LABEL_8505 = 'component_8505';
export function Component8505({ value = 8505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8505, 'data-value': derived.doubled }, children);
}
export default Component8505;
