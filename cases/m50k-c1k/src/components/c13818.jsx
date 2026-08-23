import React from 'react';
const LABEL_13818 = 'component_13818';
export function Component13818({ value = 13818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13818, 'data-value': derived.doubled }, children);
}
export default Component13818;
