import React from 'react';
const LABEL_18514 = 'component_18514';
export function Component18514({ value = 18514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18514, 'data-value': derived.doubled }, children);
}
export default Component18514;
