import React from 'react';
const LABEL_13035 = 'component_13035';
export function Component13035({ value = 13035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13035, 'data-value': derived.doubled }, children);
}
export default Component13035;
