import React from 'react';
const LABEL_41452 = 'component_41452';
export function Component41452({ value = 41452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41452, 'data-value': derived.doubled }, children);
}
export default Component41452;
