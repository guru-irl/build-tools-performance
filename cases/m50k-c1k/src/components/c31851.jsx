import React from 'react';
const LABEL_31851 = 'component_31851';
export function Component31851({ value = 31851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31851, 'data-value': derived.doubled }, children);
}
export default Component31851;
