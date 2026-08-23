import React from 'react';
const LABEL_9058 = 'component_9058';
export function Component9058({ value = 9058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9058, 'data-value': derived.doubled }, children);
}
export default Component9058;
