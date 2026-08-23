import React from 'react';
const LABEL_28854 = 'component_28854';
export function Component28854({ value = 28854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28854, 'data-value': derived.doubled }, children);
}
export default Component28854;
