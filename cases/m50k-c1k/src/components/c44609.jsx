import React from 'react';
const LABEL_44609 = 'component_44609';
export function Component44609({ value = 44609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44609, 'data-value': derived.doubled }, children);
}
export default Component44609;
