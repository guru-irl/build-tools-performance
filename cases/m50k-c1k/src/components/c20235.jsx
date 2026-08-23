import React from 'react';
const LABEL_20235 = 'component_20235';
export function Component20235({ value = 20235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20235, 'data-value': derived.doubled }, children);
}
export default Component20235;
