import React from 'react';
const LABEL_31972 = 'component_31972';
export function Component31972({ value = 31972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31972, 'data-value': derived.doubled }, children);
}
export default Component31972;
