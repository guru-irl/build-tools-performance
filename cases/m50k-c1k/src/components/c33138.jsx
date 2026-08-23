import React from 'react';
const LABEL_33138 = 'component_33138';
export function Component33138({ value = 33138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33138, 'data-value': derived.doubled }, children);
}
export default Component33138;
