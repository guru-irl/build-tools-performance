import React from 'react';
const LABEL_15028 = 'component_15028';
export function Component15028({ value = 15028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15028, 'data-value': derived.doubled }, children);
}
export default Component15028;
