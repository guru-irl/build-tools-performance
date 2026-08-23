import React from 'react';
const LABEL_20920 = 'component_20920';
export function Component20920({ value = 20920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20920, 'data-value': derived.doubled }, children);
}
export default Component20920;
