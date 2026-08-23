import React from 'react';
const LABEL_10696 = 'component_10696';
export function Component10696({ value = 10696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10696, 'data-value': derived.doubled }, children);
}
export default Component10696;
