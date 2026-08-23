import React from 'react';
const LABEL_46279 = 'component_46279';
export function Component46279({ value = 46279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46279, 'data-value': derived.doubled }, children);
}
export default Component46279;
