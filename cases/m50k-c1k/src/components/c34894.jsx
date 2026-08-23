import React from 'react';
const LABEL_34894 = 'component_34894';
export function Component34894({ value = 34894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34894, 'data-value': derived.doubled }, children);
}
export default Component34894;
