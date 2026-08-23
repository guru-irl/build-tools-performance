import React from 'react';
const LABEL_26144 = 'component_26144';
export function Component26144({ value = 26144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26144, 'data-value': derived.doubled }, children);
}
export default Component26144;
