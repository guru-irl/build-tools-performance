import React from 'react';
const LABEL_24849 = 'component_24849';
export function Component24849({ value = 24849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24849, 'data-value': derived.doubled }, children);
}
export default Component24849;
