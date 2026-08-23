import React from 'react';
const LABEL_8741 = 'component_8741';
export function Component8741({ value = 8741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8741, 'data-value': derived.doubled }, children);
}
export default Component8741;
