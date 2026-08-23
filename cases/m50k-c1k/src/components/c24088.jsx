import React from 'react';
const LABEL_24088 = 'component_24088';
export function Component24088({ value = 24088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24088, 'data-value': derived.doubled }, children);
}
export default Component24088;
