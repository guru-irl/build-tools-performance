import React from 'react';
const LABEL_7689 = 'component_7689';
export function Component7689({ value = 7689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7689, 'data-value': derived.doubled }, children);
}
export default Component7689;
