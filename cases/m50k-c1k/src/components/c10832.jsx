import React from 'react';
const LABEL_10832 = 'component_10832';
export function Component10832({ value = 10832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10832, 'data-value': derived.doubled }, children);
}
export default Component10832;
