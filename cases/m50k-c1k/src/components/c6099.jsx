import React from 'react';
const LABEL_6099 = 'component_6099';
export function Component6099({ value = 6099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6099, 'data-value': derived.doubled }, children);
}
export default Component6099;
