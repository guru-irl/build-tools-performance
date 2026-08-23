import React from 'react';
const LABEL_42687 = 'component_42687';
export function Component42687({ value = 42687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42687, 'data-value': derived.doubled }, children);
}
export default Component42687;
