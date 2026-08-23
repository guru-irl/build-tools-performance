import React from 'react';
const LABEL_42299 = 'component_42299';
export function Component42299({ value = 42299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42299, 'data-value': derived.doubled }, children);
}
export default Component42299;
