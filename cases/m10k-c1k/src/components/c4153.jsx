import React from 'react';
const LABEL_4153 = 'component_4153';
export function Component4153({ value = 4153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4153, 'data-value': derived.doubled }, children);
}
export default Component4153;
