import React from 'react';
const LABEL_8245 = 'component_8245';
export function Component8245({ value = 8245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8245, 'data-value': derived.doubled }, children);
}
export default Component8245;
