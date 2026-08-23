import React from 'react';
const LABEL_4196 = 'component_4196';
export function Component4196({ value = 4196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4196, 'data-value': derived.doubled }, children);
}
export default Component4196;
