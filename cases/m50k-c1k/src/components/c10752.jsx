import React from 'react';
const LABEL_10752 = 'component_10752';
export function Component10752({ value = 10752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10752, 'data-value': derived.doubled }, children);
}
export default Component10752;
