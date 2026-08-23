import React from 'react';
const LABEL_45935 = 'component_45935';
export function Component45935({ value = 45935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45935, 'data-value': derived.doubled }, children);
}
export default Component45935;
