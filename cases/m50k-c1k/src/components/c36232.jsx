import React from 'react';
const LABEL_36232 = 'component_36232';
export function Component36232({ value = 36232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36232, 'data-value': derived.doubled }, children);
}
export default Component36232;
