import React from 'react';
const LABEL_24441 = 'component_24441';
export function Component24441({ value = 24441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24441, 'data-value': derived.doubled }, children);
}
export default Component24441;
