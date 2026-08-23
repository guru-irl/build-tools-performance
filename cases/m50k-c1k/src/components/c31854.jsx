import React from 'react';
const LABEL_31854 = 'component_31854';
export function Component31854({ value = 31854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31854, 'data-value': derived.doubled }, children);
}
export default Component31854;
