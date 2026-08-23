import React from 'react';
const LABEL_11416 = 'component_11416';
export function Component11416({ value = 11416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11416, 'data-value': derived.doubled }, children);
}
export default Component11416;
