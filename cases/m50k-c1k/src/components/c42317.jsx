import React from 'react';
const LABEL_42317 = 'component_42317';
export function Component42317({ value = 42317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42317, 'data-value': derived.doubled }, children);
}
export default Component42317;
