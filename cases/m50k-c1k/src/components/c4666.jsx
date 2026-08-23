import React from 'react';
const LABEL_4666 = 'component_4666';
export function Component4666({ value = 4666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4666, 'data-value': derived.doubled }, children);
}
export default Component4666;
