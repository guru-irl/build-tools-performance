import React from 'react';
const LABEL_40514 = 'component_40514';
export function Component40514({ value = 40514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40514, 'data-value': derived.doubled }, children);
}
export default Component40514;
