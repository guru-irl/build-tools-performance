import React from 'react';
const LABEL_3502 = 'component_3502';
export function Component3502({ value = 3502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3502, 'data-value': derived.doubled }, children);
}
export default Component3502;
