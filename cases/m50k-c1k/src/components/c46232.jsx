import React from 'react';
const LABEL_46232 = 'component_46232';
export function Component46232({ value = 46232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46232, 'data-value': derived.doubled }, children);
}
export default Component46232;
