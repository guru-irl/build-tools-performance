import React from 'react';
const LABEL_6832 = 'component_6832';
export function Component6832({ value = 6832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6832, 'data-value': derived.doubled }, children);
}
export default Component6832;
