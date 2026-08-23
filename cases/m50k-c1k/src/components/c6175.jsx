import React from 'react';
const LABEL_6175 = 'component_6175';
export function Component6175({ value = 6175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6175, 'data-value': derived.doubled }, children);
}
export default Component6175;
