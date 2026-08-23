import React from 'react';
const LABEL_40980 = 'component_40980';
export function Component40980({ value = 40980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40980, 'data-value': derived.doubled }, children);
}
export default Component40980;
