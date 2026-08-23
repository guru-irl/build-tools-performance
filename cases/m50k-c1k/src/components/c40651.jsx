import React from 'react';
const LABEL_40651 = 'component_40651';
export function Component40651({ value = 40651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40651, 'data-value': derived.doubled }, children);
}
export default Component40651;
