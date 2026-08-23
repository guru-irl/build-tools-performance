import React from 'react';
const LABEL_34281 = 'component_34281';
export function Component34281({ value = 34281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34281, 'data-value': derived.doubled }, children);
}
export default Component34281;
