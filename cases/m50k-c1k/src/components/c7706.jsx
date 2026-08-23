import React from 'react';
const LABEL_7706 = 'component_7706';
export function Component7706({ value = 7706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7706, 'data-value': derived.doubled }, children);
}
export default Component7706;
