import React from 'react';
const LABEL_13952 = 'component_13952';
export function Component13952({ value = 13952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13952, 'data-value': derived.doubled }, children);
}
export default Component13952;
