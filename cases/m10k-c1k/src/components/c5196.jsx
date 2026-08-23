import React from 'react';
const LABEL_5196 = 'component_5196';
export function Component5196({ value = 5196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5196, 'data-value': derived.doubled }, children);
}
export default Component5196;
