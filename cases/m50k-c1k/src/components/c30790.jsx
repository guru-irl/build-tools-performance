import React from 'react';
const LABEL_30790 = 'component_30790';
export function Component30790({ value = 30790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30790, 'data-value': derived.doubled }, children);
}
export default Component30790;
