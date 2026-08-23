import React from 'react';
const LABEL_36045 = 'component_36045';
export function Component36045({ value = 36045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36045, 'data-value': derived.doubled }, children);
}
export default Component36045;
