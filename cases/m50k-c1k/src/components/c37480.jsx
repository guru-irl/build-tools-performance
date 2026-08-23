import React from 'react';
const LABEL_37480 = 'component_37480';
export function Component37480({ value = 37480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37480, 'data-value': derived.doubled }, children);
}
export default Component37480;
