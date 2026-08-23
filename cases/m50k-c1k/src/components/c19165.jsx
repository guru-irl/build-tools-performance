import React from 'react';
const LABEL_19165 = 'component_19165';
export function Component19165({ value = 19165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19165, 'data-value': derived.doubled }, children);
}
export default Component19165;
