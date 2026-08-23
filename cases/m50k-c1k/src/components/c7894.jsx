import React from 'react';
const LABEL_7894 = 'component_7894';
export function Component7894({ value = 7894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7894, 'data-value': derived.doubled }, children);
}
export default Component7894;
