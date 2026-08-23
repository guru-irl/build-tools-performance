import React from 'react';
const LABEL_46740 = 'component_46740';
export function Component46740({ value = 46740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46740, 'data-value': derived.doubled }, children);
}
export default Component46740;
