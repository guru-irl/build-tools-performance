import React from 'react';
const LABEL_20892 = 'component_20892';
export function Component20892({ value = 20892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20892, 'data-value': derived.doubled }, children);
}
export default Component20892;
