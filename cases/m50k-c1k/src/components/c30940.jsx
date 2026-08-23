import React from 'react';
const LABEL_30940 = 'component_30940';
export function Component30940({ value = 30940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30940, 'data-value': derived.doubled }, children);
}
export default Component30940;
