import React from 'react';
const LABEL_7063 = 'component_7063';
export function Component7063({ value = 7063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7063, 'data-value': derived.doubled }, children);
}
export default Component7063;
