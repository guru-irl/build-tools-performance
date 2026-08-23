import React from 'react';
const LABEL_20119 = 'component_20119';
export function Component20119({ value = 20119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20119, 'data-value': derived.doubled }, children);
}
export default Component20119;
