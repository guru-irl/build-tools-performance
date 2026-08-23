import React from 'react';
const LABEL_31514 = 'component_31514';
export function Component31514({ value = 31514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31514, 'data-value': derived.doubled }, children);
}
export default Component31514;
