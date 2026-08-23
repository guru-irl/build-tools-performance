import React from 'react';
const LABEL_37222 = 'component_37222';
export function Component37222({ value = 37222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37222, 'data-value': derived.doubled }, children);
}
export default Component37222;
