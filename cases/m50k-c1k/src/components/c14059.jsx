import React from 'react';
const LABEL_14059 = 'component_14059';
export function Component14059({ value = 14059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14059, 'data-value': derived.doubled }, children);
}
export default Component14059;
