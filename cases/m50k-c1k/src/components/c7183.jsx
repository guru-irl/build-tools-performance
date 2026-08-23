import React from 'react';
const LABEL_7183 = 'component_7183';
export function Component7183({ value = 7183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7183, 'data-value': derived.doubled }, children);
}
export default Component7183;
