import React from 'react';
const LABEL_7514 = 'component_7514';
export function Component7514({ value = 7514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7514, 'data-value': derived.doubled }, children);
}
export default Component7514;
