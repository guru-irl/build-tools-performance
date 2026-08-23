import React from 'react';
const LABEL_19180 = 'component_19180';
export function Component19180({ value = 19180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19180, 'data-value': derived.doubled }, children);
}
export default Component19180;
