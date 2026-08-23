import React from 'react';
const LABEL_16563 = 'component_16563';
export function Component16563({ value = 16563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16563, 'data-value': derived.doubled }, children);
}
export default Component16563;
