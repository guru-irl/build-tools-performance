import React from 'react';
const LABEL_12201 = 'component_12201';
export function Component12201({ value = 12201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12201, 'data-value': derived.doubled }, children);
}
export default Component12201;
