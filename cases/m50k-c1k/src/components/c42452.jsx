import React from 'react';
const LABEL_42452 = 'component_42452';
export function Component42452({ value = 42452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42452, 'data-value': derived.doubled }, children);
}
export default Component42452;
