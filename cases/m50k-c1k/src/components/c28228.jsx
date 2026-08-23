import React from 'react';
const LABEL_28228 = 'component_28228';
export function Component28228({ value = 28228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28228, 'data-value': derived.doubled }, children);
}
export default Component28228;
