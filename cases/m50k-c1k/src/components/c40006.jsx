import React from 'react';
const LABEL_40006 = 'component_40006';
export function Component40006({ value = 40006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40006, 'data-value': derived.doubled }, children);
}
export default Component40006;
