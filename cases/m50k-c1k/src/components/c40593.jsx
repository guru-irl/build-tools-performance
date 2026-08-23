import React from 'react';
const LABEL_40593 = 'component_40593';
export function Component40593({ value = 40593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40593, 'data-value': derived.doubled }, children);
}
export default Component40593;
