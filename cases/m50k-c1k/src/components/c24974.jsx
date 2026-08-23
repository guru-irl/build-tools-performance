import React from 'react';
const LABEL_24974 = 'component_24974';
export function Component24974({ value = 24974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24974, 'data-value': derived.doubled }, children);
}
export default Component24974;
