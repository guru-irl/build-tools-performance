import React from 'react';
const LABEL_22980 = 'component_22980';
export function Component22980({ value = 22980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22980, 'data-value': derived.doubled }, children);
}
export default Component22980;
