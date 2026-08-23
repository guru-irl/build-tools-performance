import React from 'react';
const LABEL_33414 = 'component_33414';
export function Component33414({ value = 33414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33414, 'data-value': derived.doubled }, children);
}
export default Component33414;
