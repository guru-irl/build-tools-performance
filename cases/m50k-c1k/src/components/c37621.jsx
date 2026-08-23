import React from 'react';
const LABEL_37621 = 'component_37621';
export function Component37621({ value = 37621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37621, 'data-value': derived.doubled }, children);
}
export default Component37621;
