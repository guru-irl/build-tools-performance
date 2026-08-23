import React from 'react';
const LABEL_4811 = 'component_4811';
export function Component4811({ value = 4811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4811, 'data-value': derived.doubled }, children);
}
export default Component4811;
