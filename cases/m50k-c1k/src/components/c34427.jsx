import React from 'react';
const LABEL_34427 = 'component_34427';
export function Component34427({ value = 34427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34427, 'data-value': derived.doubled }, children);
}
export default Component34427;
