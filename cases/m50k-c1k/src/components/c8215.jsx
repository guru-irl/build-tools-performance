import React from 'react';
const LABEL_8215 = 'component_8215';
export function Component8215({ value = 8215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8215, 'data-value': derived.doubled }, children);
}
export default Component8215;
