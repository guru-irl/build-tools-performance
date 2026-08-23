import React from 'react';
const LABEL_28270 = 'component_28270';
export function Component28270({ value = 28270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28270, 'data-value': derived.doubled }, children);
}
export default Component28270;
