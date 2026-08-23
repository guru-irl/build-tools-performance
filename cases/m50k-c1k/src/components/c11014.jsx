import React from 'react';
const LABEL_11014 = 'component_11014';
export function Component11014({ value = 11014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11014, 'data-value': derived.doubled }, children);
}
export default Component11014;
