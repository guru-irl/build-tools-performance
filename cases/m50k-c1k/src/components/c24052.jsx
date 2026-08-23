import React from 'react';
const LABEL_24052 = 'component_24052';
export function Component24052({ value = 24052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24052, 'data-value': derived.doubled }, children);
}
export default Component24052;
