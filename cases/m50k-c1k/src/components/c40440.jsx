import React from 'react';
const LABEL_40440 = 'component_40440';
export function Component40440({ value = 40440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40440, 'data-value': derived.doubled }, children);
}
export default Component40440;
