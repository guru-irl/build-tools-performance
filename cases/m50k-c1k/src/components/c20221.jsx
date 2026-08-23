import React from 'react';
const LABEL_20221 = 'component_20221';
export function Component20221({ value = 20221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20221, 'data-value': derived.doubled }, children);
}
export default Component20221;
