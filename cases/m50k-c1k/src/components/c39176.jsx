import React from 'react';
const LABEL_39176 = 'component_39176';
export function Component39176({ value = 39176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39176, 'data-value': derived.doubled }, children);
}
export default Component39176;
