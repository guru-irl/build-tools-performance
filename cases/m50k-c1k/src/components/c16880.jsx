import React from 'react';
const LABEL_16880 = 'component_16880';
export function Component16880({ value = 16880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16880, 'data-value': derived.doubled }, children);
}
export default Component16880;
