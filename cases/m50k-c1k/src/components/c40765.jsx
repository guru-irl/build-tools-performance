import React from 'react';
const LABEL_40765 = 'component_40765';
export function Component40765({ value = 40765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40765, 'data-value': derived.doubled }, children);
}
export default Component40765;
