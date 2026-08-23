import React from 'react';
const LABEL_24339 = 'component_24339';
export function Component24339({ value = 24339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24339, 'data-value': derived.doubled }, children);
}
export default Component24339;
