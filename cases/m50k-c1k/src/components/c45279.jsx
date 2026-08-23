import React from 'react';
const LABEL_45279 = 'component_45279';
export function Component45279({ value = 45279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45279, 'data-value': derived.doubled }, children);
}
export default Component45279;
