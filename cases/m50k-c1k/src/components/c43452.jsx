import React from 'react';
const LABEL_43452 = 'component_43452';
export function Component43452({ value = 43452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43452, 'data-value': derived.doubled }, children);
}
export default Component43452;
