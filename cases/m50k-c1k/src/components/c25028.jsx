import React from 'react';
const LABEL_25028 = 'component_25028';
export function Component25028({ value = 25028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25028, 'data-value': derived.doubled }, children);
}
export default Component25028;
