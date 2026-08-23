import React from 'react';
const LABEL_25452 = 'component_25452';
export function Component25452({ value = 25452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25452, 'data-value': derived.doubled }, children);
}
export default Component25452;
