import React from 'react';
const LABEL_96 = 'component_96';
export function Component96({ value = 96, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_96, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_96, 'data-value': derived.doubled }, children);
}
export default Component96;
