import React from 'react';
const LABEL_14980 = 'component_14980';
export function Component14980({ value = 14980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14980, 'data-value': derived.doubled }, children);
}
export default Component14980;
