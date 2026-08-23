import React from 'react';
const LABEL_7191 = 'component_7191';
export function Component7191({ value = 7191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7191, 'data-value': derived.doubled }, children);
}
export default Component7191;
