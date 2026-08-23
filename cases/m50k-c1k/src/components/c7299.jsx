import React from 'react';
const LABEL_7299 = 'component_7299';
export function Component7299({ value = 7299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7299, 'data-value': derived.doubled }, children);
}
export default Component7299;
