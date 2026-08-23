import React from 'react';
const LABEL_20660 = 'component_20660';
export function Component20660({ value = 20660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20660, 'data-value': derived.doubled }, children);
}
export default Component20660;
