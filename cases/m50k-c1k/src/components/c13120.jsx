import React from 'react';
const LABEL_13120 = 'component_13120';
export function Component13120({ value = 13120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13120, 'data-value': derived.doubled }, children);
}
export default Component13120;
