import React from 'react';
const LABEL_12210 = 'component_12210';
export function Component12210({ value = 12210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12210, 'data-value': derived.doubled }, children);
}
export default Component12210;
