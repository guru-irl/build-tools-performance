import React from 'react';
const LABEL_22667 = 'component_22667';
export function Component22667({ value = 22667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22667, 'data-value': derived.doubled }, children);
}
export default Component22667;
