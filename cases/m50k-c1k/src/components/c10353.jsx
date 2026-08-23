import React from 'react';
const LABEL_10353 = 'component_10353';
export function Component10353({ value = 10353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10353, 'data-value': derived.doubled }, children);
}
export default Component10353;
