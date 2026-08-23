import React from 'react';
const LABEL_37312 = 'component_37312';
export function Component37312({ value = 37312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37312, 'data-value': derived.doubled }, children);
}
export default Component37312;
