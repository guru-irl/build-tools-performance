import React from 'react';
const LABEL_28894 = 'component_28894';
export function Component28894({ value = 28894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28894, 'data-value': derived.doubled }, children);
}
export default Component28894;
