import React from 'react';
const LABEL_24345 = 'component_24345';
export function Component24345({ value = 24345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24345, 'data-value': derived.doubled }, children);
}
export default Component24345;
