import React from 'react';
const LABEL_21138 = 'component_21138';
export function Component21138({ value = 21138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21138, 'data-value': derived.doubled }, children);
}
export default Component21138;
