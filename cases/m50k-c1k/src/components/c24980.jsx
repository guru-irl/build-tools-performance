import React from 'react';
const LABEL_24980 = 'component_24980';
export function Component24980({ value = 24980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24980, 'data-value': derived.doubled }, children);
}
export default Component24980;
