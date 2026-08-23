import React from 'react';
const LABEL_14364 = 'component_14364';
export function Component14364({ value = 14364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14364, 'data-value': derived.doubled }, children);
}
export default Component14364;
