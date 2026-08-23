import React from 'react';
const LABEL_16854 = 'component_16854';
export function Component16854({ value = 16854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16854, 'data-value': derived.doubled }, children);
}
export default Component16854;
