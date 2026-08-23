import React from 'react';
const LABEL_7215 = 'component_7215';
export function Component7215({ value = 7215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7215, 'data-value': derived.doubled }, children);
}
export default Component7215;
