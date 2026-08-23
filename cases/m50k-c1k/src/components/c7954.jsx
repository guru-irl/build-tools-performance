import React from 'react';
const LABEL_7954 = 'component_7954';
export function Component7954({ value = 7954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7954, 'data-value': derived.doubled }, children);
}
export default Component7954;
