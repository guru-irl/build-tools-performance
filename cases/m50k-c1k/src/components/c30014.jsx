import React from 'react';
const LABEL_30014 = 'component_30014';
export function Component30014({ value = 30014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30014, 'data-value': derived.doubled }, children);
}
export default Component30014;
