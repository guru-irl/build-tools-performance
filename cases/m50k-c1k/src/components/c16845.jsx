import React from 'react';
const LABEL_16845 = 'component_16845';
export function Component16845({ value = 16845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16845, 'data-value': derived.doubled }, children);
}
export default Component16845;
