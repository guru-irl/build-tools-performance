import React from 'react';
const LABEL_37620 = 'component_37620';
export function Component37620({ value = 37620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37620, 'data-value': derived.doubled }, children);
}
export default Component37620;
