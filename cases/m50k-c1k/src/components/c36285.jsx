import React from 'react';
const LABEL_36285 = 'component_36285';
export function Component36285({ value = 36285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36285, 'data-value': derived.doubled }, children);
}
export default Component36285;
