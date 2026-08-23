import React from 'react';
const LABEL_7005 = 'component_7005';
export function Component7005({ value = 7005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7005, 'data-value': derived.doubled }, children);
}
export default Component7005;
