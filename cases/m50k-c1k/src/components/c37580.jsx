import React from 'react';
const LABEL_37580 = 'component_37580';
export function Component37580({ value = 37580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37580, 'data-value': derived.doubled }, children);
}
export default Component37580;
