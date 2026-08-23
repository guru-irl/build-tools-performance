import React from 'react';
const LABEL_8225 = 'component_8225';
export function Component8225({ value = 8225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8225, 'data-value': derived.doubled }, children);
}
export default Component8225;
