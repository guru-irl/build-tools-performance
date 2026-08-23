import React from 'react';
const LABEL_34062 = 'component_34062';
export function Component34062({ value = 34062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34062, 'data-value': derived.doubled }, children);
}
export default Component34062;
