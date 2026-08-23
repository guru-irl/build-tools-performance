import React from 'react';
const LABEL_5577 = 'component_5577';
export function Component5577({ value = 5577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5577, 'data-value': derived.doubled }, children);
}
export default Component5577;
