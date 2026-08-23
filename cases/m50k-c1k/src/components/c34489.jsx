import React from 'react';
const LABEL_34489 = 'component_34489';
export function Component34489({ value = 34489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34489, 'data-value': derived.doubled }, children);
}
export default Component34489;
