import React from 'react';
const LABEL_37573 = 'component_37573';
export function Component37573({ value = 37573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37573, 'data-value': derived.doubled }, children);
}
export default Component37573;
