import React from 'react';
const LABEL_24042 = 'component_24042';
export function Component24042({ value = 24042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24042, 'data-value': derived.doubled }, children);
}
export default Component24042;
