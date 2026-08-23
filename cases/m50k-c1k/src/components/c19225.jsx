import React from 'react';
const LABEL_19225 = 'component_19225';
export function Component19225({ value = 19225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19225, 'data-value': derived.doubled }, children);
}
export default Component19225;
