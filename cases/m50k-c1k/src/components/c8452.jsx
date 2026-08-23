import React from 'react';
const LABEL_8452 = 'component_8452';
export function Component8452({ value = 8452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8452, 'data-value': derived.doubled }, children);
}
export default Component8452;
