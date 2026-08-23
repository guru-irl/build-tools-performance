import React from 'react';
const LABEL_20545 = 'component_20545';
export function Component20545({ value = 20545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20545, 'data-value': derived.doubled }, children);
}
export default Component20545;
