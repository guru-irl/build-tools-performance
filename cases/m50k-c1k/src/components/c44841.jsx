import React from 'react';
const LABEL_44841 = 'component_44841';
export function Component44841({ value = 44841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44841, 'data-value': derived.doubled }, children);
}
export default Component44841;
