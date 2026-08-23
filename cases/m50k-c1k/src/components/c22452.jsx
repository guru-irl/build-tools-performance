import React from 'react';
const LABEL_22452 = 'component_22452';
export function Component22452({ value = 22452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22452, 'data-value': derived.doubled }, children);
}
export default Component22452;
