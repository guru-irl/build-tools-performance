import React from 'react';
const LABEL_11221 = 'component_11221';
export function Component11221({ value = 11221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11221, 'data-value': derived.doubled }, children);
}
export default Component11221;
