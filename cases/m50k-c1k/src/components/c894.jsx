import React from 'react';
const LABEL_894 = 'component_894';
export function Component894({ value = 894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_894, 'data-value': derived.doubled }, children);
}
export default Component894;
