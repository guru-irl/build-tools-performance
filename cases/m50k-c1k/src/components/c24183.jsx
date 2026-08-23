import React from 'react';
const LABEL_24183 = 'component_24183';
export function Component24183({ value = 24183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24183, 'data-value': derived.doubled }, children);
}
export default Component24183;
