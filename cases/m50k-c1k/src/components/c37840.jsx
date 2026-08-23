import React from 'react';
const LABEL_37840 = 'component_37840';
export function Component37840({ value = 37840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37840, 'data-value': derived.doubled }, children);
}
export default Component37840;
