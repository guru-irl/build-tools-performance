import React from 'react';
const LABEL_6221 = 'component_6221';
export function Component6221({ value = 6221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6221, 'data-value': derived.doubled }, children);
}
export default Component6221;
