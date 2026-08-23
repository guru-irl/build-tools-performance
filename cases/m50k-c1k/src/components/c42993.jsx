import React from 'react';
const LABEL_42993 = 'component_42993';
export function Component42993({ value = 42993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42993, 'data-value': derived.doubled }, children);
}
export default Component42993;
