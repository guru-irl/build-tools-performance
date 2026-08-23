import React from 'react';
const LABEL_20199 = 'component_20199';
export function Component20199({ value = 20199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20199, 'data-value': derived.doubled }, children);
}
export default Component20199;
