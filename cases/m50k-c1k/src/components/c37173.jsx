import React from 'react';
const LABEL_37173 = 'component_37173';
export function Component37173({ value = 37173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37173, 'data-value': derived.doubled }, children);
}
export default Component37173;
