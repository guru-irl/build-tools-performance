import React from 'react';
const LABEL_40668 = 'component_40668';
export function Component40668({ value = 40668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40668, 'data-value': derived.doubled }, children);
}
export default Component40668;
