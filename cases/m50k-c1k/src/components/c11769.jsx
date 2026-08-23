import React from 'react';
const LABEL_11769 = 'component_11769';
export function Component11769({ value = 11769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11769, 'data-value': derived.doubled }, children);
}
export default Component11769;
