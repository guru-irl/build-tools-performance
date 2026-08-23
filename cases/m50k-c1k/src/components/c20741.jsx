import React from 'react';
const LABEL_20741 = 'component_20741';
export function Component20741({ value = 20741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20741, 'data-value': derived.doubled }, children);
}
export default Component20741;
