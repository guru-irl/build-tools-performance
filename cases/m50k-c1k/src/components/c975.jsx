import React from 'react';
const LABEL_975 = 'component_975';
export function Component975({ value = 975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_975, 'data-value': derived.doubled }, children);
}
export default Component975;
