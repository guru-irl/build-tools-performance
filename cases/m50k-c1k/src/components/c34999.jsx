import React from 'react';
const LABEL_34999 = 'component_34999';
export function Component34999({ value = 34999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34999, 'data-value': derived.doubled }, children);
}
export default Component34999;
