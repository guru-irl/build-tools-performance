import React from 'react';
const LABEL_24898 = 'component_24898';
export function Component24898({ value = 24898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24898, 'data-value': derived.doubled }, children);
}
export default Component24898;
