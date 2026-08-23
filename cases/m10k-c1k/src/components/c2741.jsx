import React from 'react';
const LABEL_2741 = 'component_2741';
export function Component2741({ value = 2741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2741, 'data-value': derived.doubled }, children);
}
export default Component2741;
