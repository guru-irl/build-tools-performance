import React from 'react';
const LABEL_24660 = 'component_24660';
export function Component24660({ value = 24660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24660, 'data-value': derived.doubled }, children);
}
export default Component24660;
