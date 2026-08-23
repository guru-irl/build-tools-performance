import React from 'react';
const LABEL_4520 = 'component_4520';
export function Component4520({ value = 4520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4520, 'data-value': derived.doubled }, children);
}
export default Component4520;
