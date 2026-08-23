import React from 'react';
const LABEL_28860 = 'component_28860';
export function Component28860({ value = 28860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28860, 'data-value': derived.doubled }, children);
}
export default Component28860;
