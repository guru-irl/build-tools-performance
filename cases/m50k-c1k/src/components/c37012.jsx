import React from 'react';
const LABEL_37012 = 'component_37012';
export function Component37012({ value = 37012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37012, 'data-value': derived.doubled }, children);
}
export default Component37012;
