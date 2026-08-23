import React from 'react';
const LABEL_24299 = 'component_24299';
export function Component24299({ value = 24299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24299, 'data-value': derived.doubled }, children);
}
export default Component24299;
