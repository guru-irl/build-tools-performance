import React from 'react';
const LABEL_31266 = 'component_31266';
export function Component31266({ value = 31266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31266, 'data-value': derived.doubled }, children);
}
export default Component31266;
