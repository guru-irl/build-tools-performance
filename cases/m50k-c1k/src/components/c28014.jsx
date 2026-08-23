import React from 'react';
const LABEL_28014 = 'component_28014';
export function Component28014({ value = 28014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28014, 'data-value': derived.doubled }, children);
}
export default Component28014;
