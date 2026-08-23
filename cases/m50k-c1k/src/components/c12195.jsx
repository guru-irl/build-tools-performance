import React from 'react';
const LABEL_12195 = 'component_12195';
export function Component12195({ value = 12195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12195, 'data-value': derived.doubled }, children);
}
export default Component12195;
