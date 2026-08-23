import React from 'react';
const LABEL_37609 = 'component_37609';
export function Component37609({ value = 37609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37609, 'data-value': derived.doubled }, children);
}
export default Component37609;
