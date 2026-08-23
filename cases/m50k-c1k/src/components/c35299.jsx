import React from 'react';
const LABEL_35299 = 'component_35299';
export function Component35299({ value = 35299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35299, 'data-value': derived.doubled }, children);
}
export default Component35299;
