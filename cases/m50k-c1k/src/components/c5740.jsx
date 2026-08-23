import React from 'react';
const LABEL_5740 = 'component_5740';
export function Component5740({ value = 5740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5740, 'data-value': derived.doubled }, children);
}
export default Component5740;
