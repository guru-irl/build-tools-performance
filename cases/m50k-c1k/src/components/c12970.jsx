import React from 'react';
const LABEL_12970 = 'component_12970';
export function Component12970({ value = 12970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12970, 'data-value': derived.doubled }, children);
}
export default Component12970;
