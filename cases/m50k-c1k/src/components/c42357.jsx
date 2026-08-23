import React from 'react';
const LABEL_42357 = 'component_42357';
export function Component42357({ value = 42357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42357, 'data-value': derived.doubled }, children);
}
export default Component42357;
