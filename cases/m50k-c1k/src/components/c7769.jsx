import React from 'react';
const LABEL_7769 = 'component_7769';
export function Component7769({ value = 7769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7769, 'data-value': derived.doubled }, children);
}
export default Component7769;
