import React from 'react';
const LABEL_20040 = 'component_20040';
export function Component20040({ value = 20040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20040, 'data-value': derived.doubled }, children);
}
export default Component20040;
