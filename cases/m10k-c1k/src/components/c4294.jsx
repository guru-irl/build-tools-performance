import React from 'react';
const LABEL_4294 = 'component_4294';
export function Component4294({ value = 4294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4294, 'data-value': derived.doubled }, children);
}
export default Component4294;
