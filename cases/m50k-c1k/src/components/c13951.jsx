import React from 'react';
const LABEL_13951 = 'component_13951';
export function Component13951({ value = 13951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13951, 'data-value': derived.doubled }, children);
}
export default Component13951;
