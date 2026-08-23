import React from 'react';
const LABEL_39033 = 'component_39033';
export function Component39033({ value = 39033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39033, 'data-value': derived.doubled }, children);
}
export default Component39033;
