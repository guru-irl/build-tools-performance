import React from 'react';
const LABEL_24365 = 'component_24365';
export function Component24365({ value = 24365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24365, 'data-value': derived.doubled }, children);
}
export default Component24365;
