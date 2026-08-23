import React from 'react';
const LABEL_40867 = 'component_40867';
export function Component40867({ value = 40867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40867, 'data-value': derived.doubled }, children);
}
export default Component40867;
