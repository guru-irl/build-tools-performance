import React from 'react';
const LABEL_45788 = 'component_45788';
export function Component45788({ value = 45788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45788, 'data-value': derived.doubled }, children);
}
export default Component45788;
