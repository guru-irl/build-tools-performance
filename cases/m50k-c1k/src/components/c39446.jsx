import React from 'react';
const LABEL_39446 = 'component_39446';
export function Component39446({ value = 39446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39446, 'data-value': derived.doubled }, children);
}
export default Component39446;
