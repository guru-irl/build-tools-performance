import React from 'react';
const LABEL_34520 = 'component_34520';
export function Component34520({ value = 34520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34520, 'data-value': derived.doubled }, children);
}
export default Component34520;
