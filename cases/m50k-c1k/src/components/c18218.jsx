import React from 'react';
const LABEL_18218 = 'component_18218';
export function Component18218({ value = 18218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18218, 'data-value': derived.doubled }, children);
}
export default Component18218;
