import React from 'react';
const LABEL_18980 = 'component_18980';
export function Component18980({ value = 18980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18980, 'data-value': derived.doubled }, children);
}
export default Component18980;
