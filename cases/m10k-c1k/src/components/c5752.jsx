import React from 'react';
const LABEL_5752 = 'component_5752';
export function Component5752({ value = 5752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5752, 'data-value': derived.doubled }, children);
}
export default Component5752;
