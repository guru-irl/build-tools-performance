import React from 'react';
const LABEL_10980 = 'component_10980';
export function Component10980({ value = 10980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10980, 'data-value': derived.doubled }, children);
}
export default Component10980;
