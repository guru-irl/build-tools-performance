import React from 'react';
const LABEL_37460 = 'component_37460';
export function Component37460({ value = 37460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37460, 'data-value': derived.doubled }, children);
}
export default Component37460;
