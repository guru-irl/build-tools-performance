import React from 'react';
const LABEL_4450 = 'component_4450';
export function Component4450({ value = 4450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4450, 'data-value': derived.doubled }, children);
}
export default Component4450;
