import React from 'react';
const LABEL_37215 = 'component_37215';
export function Component37215({ value = 37215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37215, 'data-value': derived.doubled }, children);
}
export default Component37215;
