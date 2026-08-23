import React from 'react';
const LABEL_24175 = 'component_24175';
export function Component24175({ value = 24175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24175, 'data-value': derived.doubled }, children);
}
export default Component24175;
