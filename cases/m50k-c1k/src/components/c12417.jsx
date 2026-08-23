import React from 'react';
const LABEL_12417 = 'component_12417';
export function Component12417({ value = 12417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12417, 'data-value': derived.doubled }, children);
}
export default Component12417;
