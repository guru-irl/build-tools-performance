import React from 'react';
const LABEL_20980 = 'component_20980';
export function Component20980({ value = 20980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20980, 'data-value': derived.doubled }, children);
}
export default Component20980;
