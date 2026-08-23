import React from 'react';
const LABEL_34383 = 'component_34383';
export function Component34383({ value = 34383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34383, 'data-value': derived.doubled }, children);
}
export default Component34383;
