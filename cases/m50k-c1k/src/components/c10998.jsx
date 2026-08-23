import React from 'react';
const LABEL_10998 = 'component_10998';
export function Component10998({ value = 10998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10998, 'data-value': derived.doubled }, children);
}
export default Component10998;
