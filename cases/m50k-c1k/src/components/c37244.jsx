import React from 'react';
const LABEL_37244 = 'component_37244';
export function Component37244({ value = 37244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37244, 'data-value': derived.doubled }, children);
}
export default Component37244;
