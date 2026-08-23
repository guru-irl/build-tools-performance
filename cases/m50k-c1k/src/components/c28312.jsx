import React from 'react';
const LABEL_28312 = 'component_28312';
export function Component28312({ value = 28312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28312, 'data-value': derived.doubled }, children);
}
export default Component28312;
