import React from 'react';
const LABEL_40215 = 'component_40215';
export function Component40215({ value = 40215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40215, 'data-value': derived.doubled }, children);
}
export default Component40215;
