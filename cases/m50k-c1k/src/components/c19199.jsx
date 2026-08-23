import React from 'react';
const LABEL_19199 = 'component_19199';
export function Component19199({ value = 19199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19199, 'data-value': derived.doubled }, children);
}
export default Component19199;
