import React from 'react';
const LABEL_42119 = 'component_42119';
export function Component42119({ value = 42119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42119, 'data-value': derived.doubled }, children);
}
export default Component42119;
