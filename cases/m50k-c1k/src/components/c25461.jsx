import React from 'react';
const LABEL_25461 = 'component_25461';
export function Component25461({ value = 25461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25461, 'data-value': derived.doubled }, children);
}
export default Component25461;
