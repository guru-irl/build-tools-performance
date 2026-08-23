import React from 'react';
const LABEL_6514 = 'component_6514';
export function Component6514({ value = 6514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6514, 'data-value': derived.doubled }, children);
}
export default Component6514;
