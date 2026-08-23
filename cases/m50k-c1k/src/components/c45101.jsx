import React from 'react';
const LABEL_45101 = 'component_45101';
export function Component45101({ value = 45101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45101, 'data-value': derived.doubled }, children);
}
export default Component45101;
