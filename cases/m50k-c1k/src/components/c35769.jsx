import React from 'react';
const LABEL_35769 = 'component_35769';
export function Component35769({ value = 35769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35769, 'data-value': derived.doubled }, children);
}
export default Component35769;
