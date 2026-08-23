import React from 'react';
const LABEL_46006 = 'component_46006';
export function Component46006({ value = 46006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46006, 'data-value': derived.doubled }, children);
}
export default Component46006;
