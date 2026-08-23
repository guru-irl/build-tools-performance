import React from 'react';
const LABEL_13651 = 'component_13651';
export function Component13651({ value = 13651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13651, 'data-value': derived.doubled }, children);
}
export default Component13651;
