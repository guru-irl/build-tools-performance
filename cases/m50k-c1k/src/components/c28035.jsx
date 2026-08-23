import React from 'react';
const LABEL_28035 = 'component_28035';
export function Component28035({ value = 28035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28035, 'data-value': derived.doubled }, children);
}
export default Component28035;
