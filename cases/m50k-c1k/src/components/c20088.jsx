import React from 'react';
const LABEL_20088 = 'component_20088';
export function Component20088({ value = 20088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20088, 'data-value': derived.doubled }, children);
}
export default Component20088;
