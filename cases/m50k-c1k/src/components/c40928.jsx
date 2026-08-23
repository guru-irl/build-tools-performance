import React from 'react';
const LABEL_40928 = 'component_40928';
export function Component40928({ value = 40928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40928, 'data-value': derived.doubled }, children);
}
export default Component40928;
