import React from 'react';
const LABEL_12769 = 'component_12769';
export function Component12769({ value = 12769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12769, 'data-value': derived.doubled }, children);
}
export default Component12769;
