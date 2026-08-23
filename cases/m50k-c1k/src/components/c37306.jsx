import React from 'react';
const LABEL_37306 = 'component_37306';
export function Component37306({ value = 37306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37306, 'data-value': derived.doubled }, children);
}
export default Component37306;
