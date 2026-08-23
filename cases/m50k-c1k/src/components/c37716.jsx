import React from 'react';
const LABEL_37716 = 'component_37716';
export function Component37716({ value = 37716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37716, 'data-value': derived.doubled }, children);
}
export default Component37716;
