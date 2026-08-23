import React from 'react';
const LABEL_10414 = 'component_10414';
export function Component10414({ value = 10414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10414, 'data-value': derived.doubled }, children);
}
export default Component10414;
