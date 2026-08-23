import React from 'react';
const LABEL_3452 = 'component_3452';
export function Component3452({ value = 3452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3452, 'data-value': derived.doubled }, children);
}
export default Component3452;
