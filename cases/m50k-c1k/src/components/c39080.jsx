import React from 'react';
const LABEL_39080 = 'component_39080';
export function Component39080({ value = 39080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39080, 'data-value': derived.doubled }, children);
}
export default Component39080;
