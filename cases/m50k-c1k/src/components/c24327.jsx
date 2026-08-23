import React from 'react';
const LABEL_24327 = 'component_24327';
export function Component24327({ value = 24327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24327, 'data-value': derived.doubled }, children);
}
export default Component24327;
