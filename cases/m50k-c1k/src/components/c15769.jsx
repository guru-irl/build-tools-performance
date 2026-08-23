import React from 'react';
const LABEL_15769 = 'component_15769';
export function Component15769({ value = 15769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15769, 'data-value': derived.doubled }, children);
}
export default Component15769;
