import React from 'react';
const LABEL_37914 = 'component_37914';
export function Component37914({ value = 37914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37914, 'data-value': derived.doubled }, children);
}
export default Component37914;
