import React from 'react';
const LABEL_39035 = 'component_39035';
export function Component39035({ value = 39035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39035, 'data-value': derived.doubled }, children);
}
export default Component39035;
