import React from 'react';
const LABEL_13414 = 'component_13414';
export function Component13414({ value = 13414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13414, 'data-value': derived.doubled }, children);
}
export default Component13414;
