import React from 'react';
const LABEL_34932 = 'component_34932';
export function Component34932({ value = 34932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34932, 'data-value': derived.doubled }, children);
}
export default Component34932;
