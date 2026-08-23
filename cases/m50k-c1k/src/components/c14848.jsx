import React from 'react';
const LABEL_14848 = 'component_14848';
export function Component14848({ value = 14848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14848, 'data-value': derived.doubled }, children);
}
export default Component14848;
