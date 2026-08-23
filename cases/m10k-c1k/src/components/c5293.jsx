import React from 'react';
const LABEL_5293 = 'component_5293';
export function Component5293({ value = 5293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5293, 'data-value': derived.doubled }, children);
}
export default Component5293;
