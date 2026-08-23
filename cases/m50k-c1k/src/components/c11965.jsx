import React from 'react';
const LABEL_11965 = 'component_11965';
export function Component11965({ value = 11965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11965, 'data-value': derived.doubled }, children);
}
export default Component11965;
