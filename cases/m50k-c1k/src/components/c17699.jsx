import React from 'react';
const LABEL_17699 = 'component_17699';
export function Component17699({ value = 17699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17699, 'data-value': derived.doubled }, children);
}
export default Component17699;
