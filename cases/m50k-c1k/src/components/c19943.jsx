import React from 'react';
const LABEL_19943 = 'component_19943';
export function Component19943({ value = 19943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19943, 'data-value': derived.doubled }, children);
}
export default Component19943;
