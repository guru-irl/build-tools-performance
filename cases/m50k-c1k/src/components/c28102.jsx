import React from 'react';
const LABEL_28102 = 'component_28102';
export function Component28102({ value = 28102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28102, 'data-value': derived.doubled }, children);
}
export default Component28102;
