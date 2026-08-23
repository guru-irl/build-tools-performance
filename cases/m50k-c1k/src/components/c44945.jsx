import React from 'react';
const LABEL_44945 = 'component_44945';
export function Component44945({ value = 44945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44945, 'data-value': derived.doubled }, children);
}
export default Component44945;
