import React from 'react';
const LABEL_16740 = 'component_16740';
export function Component16740({ value = 16740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16740, 'data-value': derived.doubled }, children);
}
export default Component16740;
