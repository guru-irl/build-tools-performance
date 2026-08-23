import React from 'react';
const LABEL_19006 = 'component_19006';
export function Component19006({ value = 19006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19006, 'data-value': derived.doubled }, children);
}
export default Component19006;
