import React from 'react';
const LABEL_44045 = 'component_44045';
export function Component44045({ value = 44045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44045, 'data-value': derived.doubled }, children);
}
export default Component44045;
