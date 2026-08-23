import React from 'react';
const LABEL_41191 = 'component_41191';
export function Component41191({ value = 41191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41191, 'data-value': derived.doubled }, children);
}
export default Component41191;
