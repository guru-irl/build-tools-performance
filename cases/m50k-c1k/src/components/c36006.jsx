import React from 'react';
const LABEL_36006 = 'component_36006';
export function Component36006({ value = 36006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36006, 'data-value': derived.doubled }, children);
}
export default Component36006;
