import React from 'react';
const LABEL_37452 = 'component_37452';
export function Component37452({ value = 37452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37452, 'data-value': derived.doubled }, children);
}
export default Component37452;
