import React from 'react';
const LABEL_30005 = 'component_30005';
export function Component30005({ value = 30005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30005, 'data-value': derived.doubled }, children);
}
export default Component30005;
