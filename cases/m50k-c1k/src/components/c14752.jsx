import React from 'react';
const LABEL_14752 = 'component_14752';
export function Component14752({ value = 14752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14752, 'data-value': derived.doubled }, children);
}
export default Component14752;
