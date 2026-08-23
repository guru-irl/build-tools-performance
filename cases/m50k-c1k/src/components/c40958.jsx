import React from 'react';
const LABEL_40958 = 'component_40958';
export function Component40958({ value = 40958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40958, 'data-value': derived.doubled }, children);
}
export default Component40958;
