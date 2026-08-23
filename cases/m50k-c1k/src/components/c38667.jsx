import React from 'react';
const LABEL_38667 = 'component_38667';
export function Component38667({ value = 38667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38667, 'data-value': derived.doubled }, children);
}
export default Component38667;
