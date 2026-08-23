import React from 'react';
const LABEL_46717 = 'component_46717';
export function Component46717({ value = 46717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46717, 'data-value': derived.doubled }, children);
}
export default Component46717;
