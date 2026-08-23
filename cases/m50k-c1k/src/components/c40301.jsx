import React from 'react';
const LABEL_40301 = 'component_40301';
export function Component40301({ value = 40301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40301, 'data-value': derived.doubled }, children);
}
export default Component40301;
