import React from 'react';
const LABEL_10769 = 'component_10769';
export function Component10769({ value = 10769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10769, 'data-value': derived.doubled }, children);
}
export default Component10769;
