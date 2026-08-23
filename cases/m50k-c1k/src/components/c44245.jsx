import React from 'react';
const LABEL_44245 = 'component_44245';
export function Component44245({ value = 44245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44245, 'data-value': derived.doubled }, children);
}
export default Component44245;
