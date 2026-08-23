import React from 'react';
const LABEL_18266 = 'component_18266';
export function Component18266({ value = 18266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18266, 'data-value': derived.doubled }, children);
}
export default Component18266;
