import React from 'react';
const LABEL_6740 = 'component_6740';
export function Component6740({ value = 6740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6740, 'data-value': derived.doubled }, children);
}
export default Component6740;
