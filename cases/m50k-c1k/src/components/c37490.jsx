import React from 'react';
const LABEL_37490 = 'component_37490';
export function Component37490({ value = 37490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37490, 'data-value': derived.doubled }, children);
}
export default Component37490;
