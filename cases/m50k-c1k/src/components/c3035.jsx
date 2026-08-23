import React from 'react';
const LABEL_3035 = 'component_3035';
export function Component3035({ value = 3035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3035, 'data-value': derived.doubled }, children);
}
export default Component3035;
