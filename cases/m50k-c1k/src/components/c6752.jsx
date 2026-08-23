import React from 'react';
const LABEL_6752 = 'component_6752';
export function Component6752({ value = 6752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6752, 'data-value': derived.doubled }, children);
}
export default Component6752;
