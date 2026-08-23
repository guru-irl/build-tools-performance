import React from 'react';
const LABEL_4246 = 'component_4246';
export function Component4246({ value = 4246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4246, 'data-value': derived.doubled }, children);
}
export default Component4246;
