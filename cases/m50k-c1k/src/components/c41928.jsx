import React from 'react';
const LABEL_41928 = 'component_41928';
export function Component41928({ value = 41928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41928, 'data-value': derived.doubled }, children);
}
export default Component41928;
