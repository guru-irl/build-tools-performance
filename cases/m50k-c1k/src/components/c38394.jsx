import React from 'react';
const LABEL_38394 = 'component_38394';
export function Component38394({ value = 38394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38394, 'data-value': derived.doubled }, children);
}
export default Component38394;
