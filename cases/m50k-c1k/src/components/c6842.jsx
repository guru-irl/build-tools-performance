import React from 'react';
const LABEL_6842 = 'component_6842';
export function Component6842({ value = 6842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6842, 'data-value': derived.doubled }, children);
}
export default Component6842;
