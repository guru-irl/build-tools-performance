import React from 'react';
const LABEL_4126 = 'component_4126';
export function Component4126({ value = 4126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4126, 'data-value': derived.doubled }, children);
}
export default Component4126;
