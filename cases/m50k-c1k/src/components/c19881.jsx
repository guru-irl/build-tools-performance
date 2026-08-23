import React from 'react';
const LABEL_19881 = 'component_19881';
export function Component19881({ value = 19881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19881, 'data-value': derived.doubled }, children);
}
export default Component19881;
