import React from 'react';
const LABEL_36580 = 'component_36580';
export function Component36580({ value = 36580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36580, 'data-value': derived.doubled }, children);
}
export default Component36580;
