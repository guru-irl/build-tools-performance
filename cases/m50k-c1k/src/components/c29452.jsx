import React from 'react';
const LABEL_29452 = 'component_29452';
export function Component29452({ value = 29452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29452, 'data-value': derived.doubled }, children);
}
export default Component29452;
