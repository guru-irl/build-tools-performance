import React from 'react';
const LABEL_37336 = 'component_37336';
export function Component37336({ value = 37336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37336, 'data-value': derived.doubled }, children);
}
export default Component37336;
