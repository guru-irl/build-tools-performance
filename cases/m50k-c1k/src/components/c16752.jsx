import React from 'react';
const LABEL_16752 = 'component_16752';
export function Component16752({ value = 16752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16752, 'data-value': derived.doubled }, children);
}
export default Component16752;
