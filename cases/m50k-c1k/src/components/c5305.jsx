import React from 'react';
const LABEL_5305 = 'component_5305';
export function Component5305({ value = 5305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5305, 'data-value': derived.doubled }, children);
}
export default Component5305;
