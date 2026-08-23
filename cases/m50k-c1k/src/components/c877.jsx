import React from 'react';
const LABEL_877 = 'component_877';
export function Component877({ value = 877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_877, 'data-value': derived.doubled }, children);
}
export default Component877;
