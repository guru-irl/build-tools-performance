import React from 'react';
const LABEL_40452 = 'component_40452';
export function Component40452({ value = 40452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40452, 'data-value': derived.doubled }, children);
}
export default Component40452;
