import React from 'react';
const LABEL_41249 = 'component_41249';
export function Component41249({ value = 41249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41249, 'data-value': derived.doubled }, children);
}
export default Component41249;
