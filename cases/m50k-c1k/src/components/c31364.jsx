import React from 'react';
const LABEL_31364 = 'component_31364';
export function Component31364({ value = 31364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31364, 'data-value': derived.doubled }, children);
}
export default Component31364;
