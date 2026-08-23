import React from 'react';
const LABEL_5932 = 'component_5932';
export function Component5932({ value = 5932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5932, 'data-value': derived.doubled }, children);
}
export default Component5932;
