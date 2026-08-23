import React from 'react';
const LABEL_46384 = 'component_46384';
export function Component46384({ value = 46384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46384, 'data-value': derived.doubled }, children);
}
export default Component46384;
