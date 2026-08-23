import React from 'react';
const LABEL_3867 = 'component_3867';
export function Component3867({ value = 3867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3867, 'data-value': derived.doubled }, children);
}
export default Component3867;
