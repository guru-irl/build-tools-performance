import React from 'react';
const LABEL_12387 = 'component_12387';
export function Component12387({ value = 12387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12387, 'data-value': derived.doubled }, children);
}
export default Component12387;
