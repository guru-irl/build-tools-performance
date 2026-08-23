import React from 'react';
const LABEL_20286 = 'component_20286';
export function Component20286({ value = 20286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20286, 'data-value': derived.doubled }, children);
}
export default Component20286;
