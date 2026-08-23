import React from 'react';
const LABEL_46144 = 'component_46144';
export function Component46144({ value = 46144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46144, 'data-value': derived.doubled }, children);
}
export default Component46144;
