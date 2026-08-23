import React from 'react';
const LABEL_34915 = 'component_34915';
export function Component34915({ value = 34915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34915, 'data-value': derived.doubled }, children);
}
export default Component34915;
