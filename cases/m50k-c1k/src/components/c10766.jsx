import React from 'react';
const LABEL_10766 = 'component_10766';
export function Component10766({ value = 10766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10766, 'data-value': derived.doubled }, children);
}
export default Component10766;
