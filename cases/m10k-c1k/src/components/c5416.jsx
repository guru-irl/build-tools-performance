import React from 'react';
const LABEL_5416 = 'component_5416';
export function Component5416({ value = 5416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5416, 'data-value': derived.doubled }, children);
}
export default Component5416;
