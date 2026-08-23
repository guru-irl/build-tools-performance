import React from 'react';
const LABEL_28980 = 'component_28980';
export function Component28980({ value = 28980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28980, 'data-value': derived.doubled }, children);
}
export default Component28980;
