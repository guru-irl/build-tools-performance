import React from 'react';
const LABEL_46894 = 'component_46894';
export function Component46894({ value = 46894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46894, 'data-value': derived.doubled }, children);
}
export default Component46894;
