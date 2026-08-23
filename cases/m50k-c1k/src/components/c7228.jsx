import React from 'react';
const LABEL_7228 = 'component_7228';
export function Component7228({ value = 7228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7228, 'data-value': derived.doubled }, children);
}
export default Component7228;
