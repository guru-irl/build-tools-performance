import React from 'react';
const LABEL_32028 = 'component_32028';
export function Component32028({ value = 32028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32028, 'data-value': derived.doubled }, children);
}
export default Component32028;
