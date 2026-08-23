import React from 'react';
const LABEL_20231 = 'component_20231';
export function Component20231({ value = 20231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20231, 'data-value': derived.doubled }, children);
}
export default Component20231;
