import React from 'react';
const LABEL_32412 = 'component_32412';
export function Component32412({ value = 32412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32412, 'data-value': derived.doubled }, children);
}
export default Component32412;
