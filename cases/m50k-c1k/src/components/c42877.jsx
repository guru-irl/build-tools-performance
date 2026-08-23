import React from 'react';
const LABEL_42877 = 'component_42877';
export function Component42877({ value = 42877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42877, 'data-value': derived.doubled }, children);
}
export default Component42877;
