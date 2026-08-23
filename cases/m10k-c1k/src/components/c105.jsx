import React from 'react';
const LABEL_105 = 'component_105';
export function Component105({ value = 105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_105, 'data-value': derived.doubled }, children);
}
export default Component105;
