import React from 'react';
const LABEL_11738 = 'component_11738';
export function Component11738({ value = 11738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11738, 'data-value': derived.doubled }, children);
}
export default Component11738;
