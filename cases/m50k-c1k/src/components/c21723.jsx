import React from 'react';
const LABEL_21723 = 'component_21723';
export function Component21723({ value = 21723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21723, 'data-value': derived.doubled }, children);
}
export default Component21723;
