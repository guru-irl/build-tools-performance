import React from 'react';
const LABEL_20514 = 'component_20514';
export function Component20514({ value = 20514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20514, 'data-value': derived.doubled }, children);
}
export default Component20514;
