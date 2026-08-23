import React from 'react';
const LABEL_19435 = 'component_19435';
export function Component19435({ value = 19435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19435, 'data-value': derived.doubled }, children);
}
export default Component19435;
