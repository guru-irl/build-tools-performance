import React from 'react';
const LABEL_215 = 'component_215';
export function Component215({ value = 215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_215, 'data-value': derived.doubled }, children);
}
export default Component215;
