import React from 'react';
const LABEL_4898 = 'component_4898';
export function Component4898({ value = 4898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4898, 'data-value': derived.doubled }, children);
}
export default Component4898;
