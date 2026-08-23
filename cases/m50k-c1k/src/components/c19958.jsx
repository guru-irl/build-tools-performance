import React from 'react';
const LABEL_19958 = 'component_19958';
export function Component19958({ value = 19958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19958, 'data-value': derived.doubled }, children);
}
export default Component19958;
