import React from 'react';
const LABEL_42381 = 'component_42381';
export function Component42381({ value = 42381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42381, 'data-value': derived.doubled }, children);
}
export default Component42381;
