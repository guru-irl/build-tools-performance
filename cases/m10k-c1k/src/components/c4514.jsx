import React from 'react';
const LABEL_4514 = 'component_4514';
export function Component4514({ value = 4514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4514, 'data-value': derived.doubled }, children);
}
export default Component4514;
