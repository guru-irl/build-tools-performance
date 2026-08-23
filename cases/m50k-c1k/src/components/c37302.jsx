import React from 'react';
const LABEL_37302 = 'component_37302';
export function Component37302({ value = 37302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37302, 'data-value': derived.doubled }, children);
}
export default Component37302;
