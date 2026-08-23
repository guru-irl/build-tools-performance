import React from 'react';
const LABEL_24514 = 'component_24514';
export function Component24514({ value = 24514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24514, 'data-value': derived.doubled }, children);
}
export default Component24514;
