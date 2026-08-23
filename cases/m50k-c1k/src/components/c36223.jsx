import React from 'react';
const LABEL_36223 = 'component_36223';
export function Component36223({ value = 36223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36223, 'data-value': derived.doubled }, children);
}
export default Component36223;
