import React from 'react';
const LABEL_8023 = 'component_8023';
export function Component8023({ value = 8023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8023, 'data-value': derived.doubled }, children);
}
export default Component8023;
