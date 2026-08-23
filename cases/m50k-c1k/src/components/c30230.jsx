import React from 'react';
const LABEL_30230 = 'component_30230';
export function Component30230({ value = 30230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30230, 'data-value': derived.doubled }, children);
}
export default Component30230;
