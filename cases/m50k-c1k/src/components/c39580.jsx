import React from 'react';
const LABEL_39580 = 'component_39580';
export function Component39580({ value = 39580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39580, 'data-value': derived.doubled }, children);
}
export default Component39580;
