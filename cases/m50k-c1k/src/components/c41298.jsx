import React from 'react';
const LABEL_41298 = 'component_41298';
export function Component41298({ value = 41298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41298, 'data-value': derived.doubled }, children);
}
export default Component41298;
