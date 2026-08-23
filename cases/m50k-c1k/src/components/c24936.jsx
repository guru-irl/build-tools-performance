import React from 'react';
const LABEL_24936 = 'component_24936';
export function Component24936({ value = 24936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24936, 'data-value': derived.doubled }, children);
}
export default Component24936;
