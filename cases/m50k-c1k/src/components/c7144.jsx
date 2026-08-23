import React from 'react';
const LABEL_7144 = 'component_7144';
export function Component7144({ value = 7144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7144, 'data-value': derived.doubled }, children);
}
export default Component7144;
