import React from 'react';
const LABEL_24412 = 'component_24412';
export function Component24412({ value = 24412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24412, 'data-value': derived.doubled }, children);
}
export default Component24412;
