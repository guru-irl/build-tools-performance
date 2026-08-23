import React from 'react';
const LABEL_37720 = 'component_37720';
export function Component37720({ value = 37720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37720, 'data-value': derived.doubled }, children);
}
export default Component37720;
