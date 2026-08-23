import React from 'react';
const LABEL_4769 = 'component_4769';
export function Component4769({ value = 4769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4769, 'data-value': derived.doubled }, children);
}
export default Component4769;
