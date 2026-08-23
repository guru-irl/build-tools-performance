import React from 'react';
const LABEL_35514 = 'component_35514';
export function Component35514({ value = 35514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35514, 'data-value': derived.doubled }, children);
}
export default Component35514;
