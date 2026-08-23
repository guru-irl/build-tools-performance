import React from 'react';
const LABEL_6196 = 'component_6196';
export function Component6196({ value = 6196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6196, 'data-value': derived.doubled }, children);
}
export default Component6196;
