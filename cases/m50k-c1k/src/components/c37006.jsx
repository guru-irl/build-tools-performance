import React from 'react';
const LABEL_37006 = 'component_37006';
export function Component37006({ value = 37006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37006, 'data-value': derived.doubled }, children);
}
export default Component37006;
