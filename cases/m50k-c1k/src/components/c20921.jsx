import React from 'react';
const LABEL_20921 = 'component_20921';
export function Component20921({ value = 20921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20921, 'data-value': derived.doubled }, children);
}
export default Component20921;
