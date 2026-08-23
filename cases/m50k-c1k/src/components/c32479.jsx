import React from 'react';
const LABEL_32479 = 'component_32479';
export function Component32479({ value = 32479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32479, 'data-value': derived.doubled }, children);
}
export default Component32479;
