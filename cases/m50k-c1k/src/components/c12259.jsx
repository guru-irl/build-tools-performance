import React from 'react';
const LABEL_12259 = 'component_12259';
export function Component12259({ value = 12259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12259, 'data-value': derived.doubled }, children);
}
export default Component12259;
