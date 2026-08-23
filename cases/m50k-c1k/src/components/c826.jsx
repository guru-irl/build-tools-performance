import React from 'react';
const LABEL_826 = 'component_826';
export function Component826({ value = 826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_826, 'data-value': derived.doubled }, children);
}
export default Component826;
