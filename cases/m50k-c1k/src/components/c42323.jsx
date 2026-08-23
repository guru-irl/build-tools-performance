import React from 'react';
const LABEL_42323 = 'component_42323';
export function Component42323({ value = 42323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42323, 'data-value': derived.doubled }, children);
}
export default Component42323;
