import React from 'react';
const LABEL_17480 = 'component_17480';
export function Component17480({ value = 17480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17480, 'data-value': derived.doubled }, children);
}
export default Component17480;
