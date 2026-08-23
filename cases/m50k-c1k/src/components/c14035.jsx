import React from 'react';
const LABEL_14035 = 'component_14035';
export function Component14035({ value = 14035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14035, 'data-value': derived.doubled }, children);
}
export default Component14035;
