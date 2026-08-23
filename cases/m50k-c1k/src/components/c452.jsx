import React from 'react';
const LABEL_452 = 'component_452';
export function Component452({ value = 452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_452, 'data-value': derived.doubled }, children);
}
export default Component452;
