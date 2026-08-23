import React from 'react';
const LABEL_18946 = 'component_18946';
export function Component18946({ value = 18946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18946, 'data-value': derived.doubled }, children);
}
export default Component18946;
