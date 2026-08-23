import React from 'react';
const LABEL_5769 = 'component_5769';
export function Component5769({ value = 5769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5769, 'data-value': derived.doubled }, children);
}
export default Component5769;
