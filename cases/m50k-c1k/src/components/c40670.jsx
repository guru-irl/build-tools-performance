import React from 'react';
const LABEL_40670 = 'component_40670';
export function Component40670({ value = 40670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40670, 'data-value': derived.doubled }, children);
}
export default Component40670;
